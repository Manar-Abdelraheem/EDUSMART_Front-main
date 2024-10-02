
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { CommonModule } from '@angular/common';
import {  RouterModule, RouterOutlet } from '@angular/router';
import { CreateCourseFormComponent } from '../coursesComponent/create-course-form/create-course-form.component';
import { CreateLectureFormComponent } from "../coursesComponent/create-lecture-form/create-lecture-form.component";
import { CreateLessonFormComponent } from '../coursesComponent/create-lesson-form/create-course-lesson.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    RouterModule,
    CreateCourseFormComponent,
    CreateLectureFormComponent,
    CreateLessonFormComponent
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  
}
