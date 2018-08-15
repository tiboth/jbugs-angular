import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateproviderService {

  constructor() { }

  getCurrentDate(): Observable<string> {
    const d = new Date();

    const value = `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
    return of(value);
  }
}
