import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
