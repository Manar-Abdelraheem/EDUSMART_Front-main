import { Routes } from '@angular/router';
import { CourseComponent } from './Components/lessons/lesson.component';
import { courseDetailsComponent } from './Components/course-details/user-details.component';
import { LoginComponent } from './Components/login/login.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { ErrorComponent } from './Components/error/error.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateCourseFormComponent } from './Components/coursesComponent/create-course-form/create-course-form.component';
import { CreateLectureFormComponent } from './Components/coursesComponent/create-lecture-form/create-lecture-form.component';
import { CreateLessonFormComponent } from './Components/coursesComponent/create-lesson-form/create-course-lesson.component';

export const routes: Routes = [
    {path:"",component:CoursesComponent},
    {path:"courses",component:CoursesComponent},
    {path:"courses/:id",component:courseDetailsComponent},
    {path:"Dashboard",component:DashboardComponent},
    { path:'Dashboard',component: DashboardComponent,
        children: [
            { path: 'course', component: CreateCourseFormComponent },  
            { path: 'lecture', component: CreateLectureFormComponent },
            {path:'lesson',component:CreateLessonFormComponent}
    ]},
    {path:"Dashboard/Course",component:CreateCourseFormComponent},
    {path:"Dashboard/lecture",component:CreateLectureFormComponent},
    {path:"courses/:id/lesson/:id",component:CourseComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:LoginComponent},
    {path:"**",component:ErrorComponent}

];