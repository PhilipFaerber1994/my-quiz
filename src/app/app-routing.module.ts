import { MyQuizComponent } from './my-quiz/my-quiz.component';
import { CanswerQuestionsComponent } from './answer-questions/canswer-questions/canswer-questions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
