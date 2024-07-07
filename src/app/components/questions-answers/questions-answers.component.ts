import {
  Component,
  effect,
  inject,
  signal,
  runInInjectionContext,
  Injector,
  Input,
} from '@angular/core';
import { QuizDataService } from '@/services/quiz-data.service';
import { Question, Quiz } from '@/models/question';

@Component({
  selector: 'app-questions-answers',
  templateUrl: './questions-answers.component.html',
  styleUrls: ['./questions-answers.component.css'],
})
export class QuestionsAnswersComponent {
  quizDataService = inject(QuizDataService);
  quizzes = this.quizDataService.getCurrentQuiz();
  currentQuiz = this.quizDataService.getCurrentQuizInstance();

  totalCorrect = 0;
  correctAnswer = -1;
  answerSubmitted = false;
  responses = ['A', 'B', 'C', 'D'];
  currentQuestion: Question = {} as Question;
  answerSelected = signal(-1);
  showErrorMessage = signal(false);

  @Input() theme: string = 'light';

  constructor() {
    effect(() => {
      this.currentQuestion = this.currentQuiz().questions
        ? this.currentQuiz().questions[this.quizDataService.getCurrentStep()()]
        : ({} as Question);
      this.correctAnswer = this.currentQuestion.options?.indexOf(
        this.currentQuestion.answer
      );

      console.log('### correct answer is', this.correctAnswer);
    });
  }

  startQuiz(index: number): void {
    this.quizDataService.setCurrentQuiz(index);
  }

  nextQuestion(): void {
    if (this.quizDataService.getCurrentStep()() <= 8) {
      this.quizDataService.setCurrentStep(
        this.quizDataService.getCurrentStep()() + 1
      );
      this.answerSelected.set(-1);
      this.answerSubmitted = false;
    } else {
      this.quizDataService.setQuizFinished(true);
    }
  }

  submitAnswer(): void {
    this.setShowErrorMessage(false);
    this.answerSubmitted = true;
    if (this.correctAnswer === this.answerSelected()) {
      this.totalCorrect++;
    }
  }

  getAnswerVariant(index: number): 'none' | 'correct' | 'incorrect' {
    if (this.answerSubmitted) {
      if (index === this.correctAnswer) {
        return 'correct';
      } else if (index === this.answerSelected()) {
        return 'incorrect';
      }
    }
    return 'none';
  }

  onClickAnswer(index: number): void {
    this.answerSelected.set(index !== this.answerSelected() ? index : -1);
  }

  restartQuiz(): void {
    this.answerSelected.set(-1);
    this.answerSubmitted = false;
    this.quizDataService.resetData();
    this.totalCorrect = 0;
  }

  getCorrectAnswerCount(): number {
    return this.totalCorrect;
  }

  trackByQuizTitle(index: number, quiz: Quiz): string {
    return quiz.title;
  }

  getProgressBarWidth(): number {
    return (
      (100 * this.quizDataService.getCurrentStep()()) /
      this.currentQuiz().questions.length
    );
  }

  setShowErrorMessage(show: boolean): void {
    this.showErrorMessage.set(show);
  }
}
