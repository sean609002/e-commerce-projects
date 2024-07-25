import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:8080/api/user';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) {}

  //dynamically add withCredentials property to httpOptions
  private getHttpOptions(withCredentials: boolean = false): any {
    return withCredentials
      ? { ...this.httpOptions, withCredentials: true }
      : this.httpOptions;
  }

  updateUser(id:number, firstName: String, lastName: String, username: string, email: String, password: string): Observable<any> {
    return this.httpClient.put(
      this.userUrl,
      {
        id,
        firstName,
        lastName,
        username,
        email,
        password,
      },
      this.getHttpOptions(true)
    );
  }
}
