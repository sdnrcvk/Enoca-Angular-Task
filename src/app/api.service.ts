import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://newsapi.org/v2/top-headlines?country=tr&';
  private apiKey="676f017549224f488970f1835f9db971" 

  constructor(private http: HttpClient) { }

  getNewsData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}apiKey=${this.apiKey}`);
  }

  getNewsDataByCategory(categoryName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}category=${categoryName}&apiKey=${this.apiKey}`);
  }
}