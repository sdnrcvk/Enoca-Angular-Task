import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://newsapi.org/v2/top-headlines?country=tr&';
  private apiKey="3fd6a180014b4543966c03f577838167" //Yeni API Key

  constructor(private http: HttpClient) { }

  getNewsData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}apiKey=${this.apiKey}`);
  }

  getNewsDataByCategory(categoryName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}category=${categoryName}&apiKey=${this.apiKey}`);
  }
}