import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {}

  getStudent(): Observable<any> {
    return this.http.get(`${this.apiUrl}students/`);
  }

  postStudent(studentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}add_student/`, studentData);
  }
}
