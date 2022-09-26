import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private http: HttpClient) { }

  getNews(parameters: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country=' + parameters.country + '&category=' + parameters.category + '&apiKey=11e50636904c4c5981f2f2c9931b086c';
    return this.http.get(URL);
  }
}
