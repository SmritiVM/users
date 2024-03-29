import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) {}

  fetchUsers(): Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  fetchUser(id: number): Observable<User>{
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
  
}
