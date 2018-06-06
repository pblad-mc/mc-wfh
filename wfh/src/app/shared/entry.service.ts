import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Entry} from './entry.model';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private httpClient: HttpClient) { }

  getEntriesByName(fullName: string): Observable<Entry[]> {
    const url = 'https://pricey-giver.glitch.me/entries?name=' + fullName;

    return this.httpClient.get<Entry[]>(url);
  }
}
