import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Course } from '../../../intefaces/course';
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './course-card.component.html',
  styleUrl:'./course-card.component.css',
})

export class CourseCardComponent {
  @Input() course!: Course;
  base64Image: string | null = null;
  image:string='';
  ngOnInit() {
    // Assuming you fetch course data and set the base64Image
    this.image = this.course.image;
    this.base64Image = `data:image/jpeg;base64,${this.image}`;
    console.log(this.base64Image);
  }
  }

