import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GrievanceService {

  constructor(private http: HttpClient) {

  }

  getAllGrievance(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=1');
  }

  getGrievanceComments(id: number): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+ id +'/comments')
  }

  getGrievanceDetail(id: number): Observable<any> {
    return this.http.get(' https://jsonplaceholder.typicode.com/posts/'+ id)
  }


}
