import { Injectable } from '@angular/core';
import { Course, User } from 'src/app/model/model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { COURSE_API_URL } from '../../../shared/const/const';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class CourseDomainService {

  apiUrl = COURSE_API_URL;

  constructor(private http: HttpClient) { }

  courses: Course[] = [];

  public getCourses(): any {
    return this.http.get(this.apiUrl).pipe(map((response: any) => {
      return response.body;
    }));
  }

  public deleteCourse(name: string) {
    return this.http.delete(this.apiUrl,
      {
        params: {
          'name': name
        }
      });
  }

  public saveCourse(course: Course) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http.post(this.apiUrl, course, options);
  }
}
