import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsAnswersComponent } from './questions-answers.component';

describe('QuestionsAnswersComponent', () => {
  let component: QuestionsAnswersComponent;
  let fixture: ComponentFixture<QuestionsAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionsAnswersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
