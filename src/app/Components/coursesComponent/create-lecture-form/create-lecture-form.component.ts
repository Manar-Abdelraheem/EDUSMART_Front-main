import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormsModule,
  
} from '@angular/forms';
import { Course } from '../../../intefaces/course';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-create-lecture-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    RouterOutlet,
    ReactiveFormsModule  
  ],
  templateUrl: './create-lecture-form.component.html',
})
export class CreateLectureFormComponent {

}
