import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../../Services/lessons.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, YouTubePlayer],
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class CourseComponent implements OnInit {
  lessons: any[] = [];
  ID: number = 0;
  lessonUrl: string = "";
  videoId: string | null = null; // For storing video ID

  constructor(private _service: LessonsService, private myRoute: ActivatedRoute) {
    this.ID = this.myRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this._service.GetAllLessonsByModuleID(this.ID).subscribe({
      next: (data: any) => {
        this.lessons = data.$values; // Assuming data.$values is an array
        console.log(this.lessons);
        if (this.lessons.length > 0) {
        }
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }


  
}
