import { ThemeService } from '@/services/theme.service';
import {
  Component,
  effect,
  inject,
  Injector,
  runInInjectionContext,
  Input,
} from '@angular/core';
import { QuizDataService } from '@/services/quiz-data.service';
import { Question } from '@/models/question';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  quizDataService = inject(QuizDataService);

  currentQuiz = this.quizDataService.getCurrentQuizInstance();

  currentQuestion: Question = {} as Question;

  @Input() theme: string = 'light';

  constructor() {
    effect(() => {
      this.currentQuestion = this.currentQuiz().questions
        ? this.currentQuiz().questions[this.quizDataService.getCurrentStep()()]
        : ({} as Question);
    });
  }

  onSwitch(): void {
    this.themeService.changeTheme();
  }
}
