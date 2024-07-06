import { Injectable } from '@angular/core';
import { WritableSignal, signal } from '@angular/core';
import data from '@/data.json';
import { Quiz } from '@/models/question';

@Injectable({
  providedIn: 'root',
})
export class QuizDataService {
  quizzes: Quiz[] = data.quizzes;
  currentStep = signal(0);
  currentQuiz = signal({} as Quiz);
  quizFinished = signal(false);

  getCurrentQuiz(): Quiz[] {
    return this.quizzes;
  }

  getCurrentStep(): WritableSignal<number> {
    return this.currentStep;
  }

  setCurrentStep(step: number): void {
    this.currentStep.set(step);
  }

  getCurrentQuizInstance(): WritableSignal<Quiz> {
    return this.currentQuiz;
  }

  setCurrentQuiz(index: number): void {
    this.currentQuiz.set(this.quizzes[index]);
  }

  isQuizFinished(): WritableSignal<boolean> {
    return this.quizFinished;
  }

  setQuizFinished(finished: boolean): void {
    this.quizFinished.set(finished);
  }

  resetData(): void {
    this.currentStep.set(0);
    this.quizFinished.set(false);
    this.currentQuiz.set({} as Quiz);
  }
}
