import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://127.0.0.1:8000/courses/';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  postCourse(courseData: any): Observable<any> {
    return this.http.post(this.apiUrl, courseData);
  }
}
