import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  onEditClick(studentID: string) {
    console.log(`Edit clicked with ID: ${studentID}`);
  }

  onDeleteClick(studentID: string) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(studentID).subscribe(
        (response) => {
          console.log(`Student with ID ${studentID} deleted.`);
          // Refresh the student list or update as needed
        },
        (error) => {
          console.error(`Error deleting student with ID ${studentID}:`, error);
        }
      );
    }
  }
}
