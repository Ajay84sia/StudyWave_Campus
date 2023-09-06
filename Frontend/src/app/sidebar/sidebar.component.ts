import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {InstructorService } from '../instructor.service';
import {CourseService } from '../course.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  studentLength: number = 0;
  instructorLength: number = 0;
  courseLength: number = 0;


  constructor(
    private studentService: StudentService,
    private instructorService: InstructorService,
    private courseService: CourseService,
  ) {}


  ngOnInit(): void {

    this.studentService.getStudents().subscribe((data) => {
      this.studentLength = data.length;
    });

    this.instructorService.getInstructors().subscribe(data => {
      this.instructorLength = data.length;
    });

    this.courseService.getCourses().subscribe(data => {
      this.courseLength = data.length;
    });
  }
}
