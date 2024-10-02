import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { CourseComponent } from './Components/lessons/lesson.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { FooterComponent } from "./Components/footer/footer.component";
import { CourseCardComponent } from "./Components/coursesComponent/course-card/course-card.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, CourseComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    CourseCardComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
