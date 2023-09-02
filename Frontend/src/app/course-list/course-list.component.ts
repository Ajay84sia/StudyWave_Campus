import { Component, OnInit } from '@angular/core';
import {CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{
  courses: any[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

  onEditClick(courseID: string) {
    console.log(`Edit clicked with ID: ${courseID}`);
  }
  
  onDeleteClick(courseID: string) {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courseService.deleteCourse(courseID).subscribe(
        (response) => {
          console.log(`Course with ID ${courseID} deleted.`);
          // Refresh the student list or update as needed
          this.courseService.getCourses().subscribe((data) => {
            this.courses = data;
          });
        },
        (error) => {
          console.error(`Error deleting course with ID ${courseID}:`, error);
        }
      );
    }
  }
}
