import { Component, inject, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormsModule,
  
} from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-create-course-form',
  standalone: true,
  imports: [FormsModule,RouterModule,RouterOutlet,ReactiveFormsModule ],
  templateUrl: './create-course-form.component.html',
})
export class CreateCourseFormComponent {
  // courseForm!: FormGroup;
  // fb = inject(FormBuilder);
  // @Output() formSubmit = new EventEmitter<void>();
  // constructor() {
  //   this.courseForm = this.fb.group({
  //     title: ['', Validators.required],
  //     description: ['', Validators.required],
  //     category: ['', Validators.required],
  //   });
  // }

  // onSubmit() {}
}
