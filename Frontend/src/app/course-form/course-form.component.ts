import { Component } from '@angular/core';
import {CourseService } from '../course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  course: any = {};

  constructor(private courseService: CourseService) {}

  onSubmit(): void {
    this.courseService.postCourse(this.course).subscribe(response => {
      console.log('Course added:', response);
      this.course = {};
    });
  }
}
