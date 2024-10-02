import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lecture } from '../../../Types/Lecture';
import { Course } from '../../../intefaces/course';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lecture-list-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './lecture-list-item.component.html',
  styleUrl: './lecture-list-item.component.scss',
})
export class LectureListItemComponent {
  isOpen = false;
  @Input() lecture!: Lecture;
  @Input() course!: Course;

  toggle() {
    if (!this.lecture.description && !this.lecture.videoUrl) {
      return;
    }
    this.isOpen = !this.isOpen;
  }
}
