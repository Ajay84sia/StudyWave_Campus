import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseListComponent } from './course-list/course-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { InstructorFormComponent } from './instructor-form/instructor-form.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { NgToastModule } from 'ng-angular-popup';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollmentListComponent } from './enrollment-list/enrollment-list.component';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { SubmissionListComponent } from './submission-list/submission-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgChartsModule } from 'ng2-charts';
import { BarchartComponent } from './barchart/barchart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CourseFormComponent,
    CourseListComponent,
    StudentListComponent,
    StudentFormComponent,
    InstructorFormComponent,
    InstructorListComponent,
    LoginComponent,
    LogoutComponent,
    ProfileComponent,
    DashboardComponent,
    EnrollmentListComponent,
    AssignmentListComponent,
    AssignmentFormComponent,
    SubmissionListComponent,
    SidebarComponent,
    BarchartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgToastModule,
    NgChartsModule,
    AuthModule.forRoot({
      domain: 'tackle-and-trail.us.auth0.com',
      clientId: '1jhMSbnsaRklQpsuVHQwItiGfv7rKX8I',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
