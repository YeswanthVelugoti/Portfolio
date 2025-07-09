import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  phrases: string[] = [
    'Java Developer.',
    'Backend Enthusiast.',
    'Web Developer.',
    'Problem Solver.',
    'Software Developer.'
  ];

  currentPhrase = '';
  phraseIndex = 0;
  letterIndex = 0;
  isDeleting = false;

  ngOnInit() {
    this.typeEffect();
  }

  typeEffect() {
    const current = this.phrases[this.phraseIndex];
    const speed = this.isDeleting ? 60 : 120;

    this.currentPhrase = this.isDeleting
      ? current.substring(0, this.letterIndex--)
      : current.substring(0, this.letterIndex++);

    if (!this.isDeleting && this.letterIndex === current.length + 1) {
      this.isDeleting = true;
      setTimeout(() => this.typeEffect(), 1000);
    } else if (this.isDeleting && this.letterIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      setTimeout(() => this.typeEffect(), 500);
    } else {
      setTimeout(() => this.typeEffect(), speed);
    }
  }
}
