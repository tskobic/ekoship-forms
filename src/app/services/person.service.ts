import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private personUrl = '/api/persons';

  constructor(private http: HttpClient) {}

  getEmail(email: string): Observable<string> {
    const url = `${this.personUrl}?email=${email}`;

    return this.http.get<Person[]>(url).pipe(
      map((val) => val.length > 0 ? val[0].email : '')
    );
  }
}
