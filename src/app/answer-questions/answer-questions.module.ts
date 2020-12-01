import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanswerQuestionsComponent } from './canswer-questions/canswer-questions.component';



@NgModule({
  declarations: [CanswerQuestionsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CanswerQuestionsComponent,
  ]
})
export class AnswerQuestionsModule { }
