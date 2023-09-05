import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { InstructorFormComponent } from './instructor-form/instructor-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollmentListComponent } from './enrollment-list/enrollment-list.component';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { SubmissionListComponent } from './submission-list/submission-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'dashboard', component: DashboardComponent },

  { path: 'course', component: CourseListComponent },
  { path: 'add_course', component: CourseFormComponent },

  { path: 'student', component: StudentListComponent },
  { path: 'add_student', component: StudentFormComponent },

  { path: 'instructor', component: InstructorListComponent },
  { path: 'add_instructor', component: InstructorFormComponent },

  { path: 'enrollment', component: EnrollmentListComponent },

  { path: 'assignment', component: AssignmentListComponent },
  { path: 'add_assignment', component: AssignmentFormComponent },

  { path: 'submission', component: SubmissionListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
