import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../Services/course.service';
import { CommonModule } from '@angular/common'; // Import for common Angular directives

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule], // Use this for basic directives like *ngIf
  providers: [CourseService],
  templateUrl: './user-details.component.html',
  styles: ``
})
export class courseDetailsComponent implements OnInit {
  ID = 0;
  user: any; // Undefined initially, holds user data
  base64Image: string | undefined; // For the base64 image

  constructor(private myRoute: ActivatedRoute, private _courseService: CourseService) {
    this.ID = this.myRoute.snapshot.params['id']; // Get ID from route params
  }

  ngOnInit(): void {
    this._courseService.GetCourseByID(this.ID).subscribe({
      next: (data) => {
        this.user = data; // Assign the user data
        if (this.user && this.user.courseImage) {
          this.getImageFromAPI(this.user.courseImage); // Fetch base64 image
        } else {
          console.log('No image available for this user');
        }
      },
      error: (err) => {
        console.error(err); // Log the error
      }
    });
  }

  // Convert base64 string to image URL
  public getImageFromAPI(courseImage: string): void {
    this.base64Image = `data:image/jpeg;base64,${courseImage}`; // Format the image URL
  }
}
