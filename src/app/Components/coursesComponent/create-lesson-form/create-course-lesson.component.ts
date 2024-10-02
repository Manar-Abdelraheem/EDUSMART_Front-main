import { Component} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-create-lesson-from',
  standalone: true,
  imports: [RouterModule, FormsModule,ReactiveFormsModule,RouterOutlet,
    ReactiveFormsModule  

  ],
  templateUrl: './create-course-lesson.component.html',
  styleUrls: ['./create-course-lesson.component.css']
})
export class CreateLessonFormComponent {
}

