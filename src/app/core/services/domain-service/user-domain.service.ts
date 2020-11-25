import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { User } from 'src/app/model/model';
import { USER_API_URL } from 'src/app/shared/const/const';

@Injectable({
  providedIn: 'root'
})
export class UserDomainService {

  apiUrl = USER_API_URL;
  public users: User[] = [];
  thisUser: User;
  constructor(private http: HttpClient) {
  }


  public setUser(user: User): void {    
    this.thisUser = this.users.find(user => user.email === user.email);
    if (this.thisUser == undefined) {
      this.users.push(user)
      this.thisUser = user;
    }
  }

  public matchUser(email: string): void {
    this.thisUser = this.users.find(user => user.email === email);
  }

  public getThisUser(): User {
    return this.thisUser;
  }

  public getAllUsers(): User[] {
    return this.users;
  }

  public fetchUsers(): any {
    this.http.get(this.apiUrl).pipe(map((response: any) => {
      return response.body;
    })).subscribe(data => {
      this.users = data;
    });
  }

  public deleteUser(userEmail: string) {
    return this.http.delete(this.apiUrl,
      {
        params: {
          email: userEmail
        }
      });
  }

  public saveUser(user: User) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http.post(this.apiUrl, user, options);
  }

  public updateUser(user: User) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http.put(this.apiUrl, user, options);
  }

  public userExists(email: string): boolean {
    return this.users.some(user => user.email === email);
  }

}
