import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  private apiUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {}

  getSubmissions(): Observable<any> {
    return this.http.get(`${this.apiUrl}submissions/`);
  }

  deleteSubmission(submissionID: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}submissions/${submissionID}/`);
  }

  editSubmission(submissionID: string, updatedData:any): Observable<any> {
    return this.http.patch(`${this.apiUrl}submissions/update/${submissionID}/`,updatedData);
  }
}
