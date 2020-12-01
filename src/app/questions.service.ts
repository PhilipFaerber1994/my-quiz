import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuestions } from './i-questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  public url = 'http://localhost:4200/assets/questions.json';

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<IQuestions[]>{
    return this.http.get<IQuestions[]>(this.url);
  }
}
