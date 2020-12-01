
import { AnswerQuestionsModule } from './answer-questions/answer-questions.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyQuizComponent } from './my-quiz/my-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    MyQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnswerQuestionsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
