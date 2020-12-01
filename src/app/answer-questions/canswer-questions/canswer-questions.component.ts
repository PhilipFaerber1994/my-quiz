import { element } from 'protractor';
import { QuestionsService } from './../../questions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canswer-questions',
  templateUrl: './canswer-questions.component.html',
  styleUrls: ['./canswer-questions.component.css']
})
export class CanswerQuestionsComponent implements OnInit {

  public questions = [];
  public idCounter = 0;
  score = 0;
  public selectedAnswer = false;
  public nextQuestionButton = false;
  public isChecked = true;
  public round = 1;
  checkedElement = false;

  constructor(private questionsService: QuestionsService) { }

  public nextQuestion(){
    console.log(this.questions[this.idCounter]["correctAnswer"]);
    this.idCounter++;
    this.score++;
    this.round++;
    this.nextQuestionButton = false;
  }

  public checkAnswer(){         // logs in the player's answer and set nextQuestionButton on true
    this.radioChangeHandler(event); 
    if(this.selectedAnswer == true){
      alert("Prima");
      this.nextQuestionButton = true;
      this.questions[this.idCounter]["correctAnswer"] = "";
      this.selectedAnswer = false;
      
    }
    else if(this.selectedAnswer == false){
      alert("Leider falsch. Zurück zu Runde 1.");
      this.score = 0;
      this.idCounter = 0;
      this.round = 1;
    }
  }

  public radioChangeHandler(event: any){      // checks whether the selected answer is correct
    if(event.target.value == this.questions[this.idCounter]["correctAnswer"]){
      this.selectedAnswer = true;
      console.log(event.target.checked);
      console.log(event.target.checked);
    }  
  }

  ngOnInit(): void {
    this.questionsService.getQuestions()
      .subscribe(data => this.questions = data)
    
  }

}
