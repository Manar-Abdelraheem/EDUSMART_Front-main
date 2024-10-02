import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CourseCardComponent } from '../coursesComponent/course-card/course-card.component';
import { ModalComponent } from '../coursesComponent/modal/modal.component';
import { CreateCourseFormComponent } from '../coursesComponent/create-course-form/create-course-form.component';
import { LoaderComponent } from '../coursesComponent/loader/loader.component';
import { Course } from '../../intefaces/course';
import { CourseService } from '../../Services/course.service';
@Component({
  selector: 'app-courses',
  standalone: true,
  providers: [CourseService],
  imports: [
    CourseCardComponent,
    ModalComponent,
    CreateCourseFormComponent,
    AsyncPipe,
    LoaderComponent,
  ],
  templateUrl: './courses.component.html',
  styles: []
})
export class CoursesComponent implements OnInit {
  isLoading = false;
  isCreateCourseModalOpen = false;
  courses: Course[] = [];
  constructor(private readonly _courseService: CourseService) {}


  ngOnInit(): void {
    this.isLoading = true;
    this._courseService.getCourses().subscribe({
      next: (courses: any) => {
        console.log('courses', courses);
        if (Array.isArray(courses)) {
          this.courses = courses as Course[];
        } else if (courses && '$values' in courses) {
          this.courses = courses.$values as Course[];
        } else {
          console.error('Unexpected courses data structure:', courses);
          this.courses = [];
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching courses:', error);
        this.isLoading = false;
      }
    });
  }
 
}
