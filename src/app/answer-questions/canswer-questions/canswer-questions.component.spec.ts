import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanswerQuestionsComponent } from './canswer-questions.component';

describe('CanswerQuestionsComponent', () => {
  let component: CanswerQuestionsComponent;
  let fixture: ComponentFixture<CanswerQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanswerQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanswerQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
