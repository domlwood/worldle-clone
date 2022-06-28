import { Guess } from './../models/guesses';
import { countries } from '../objects/countries';
import { GetDistanceService } from './../services/get-distance.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  template: `
    <div class="container-main">
      <div id="overlay" class="overlay hidden"></div>
      <h1 id="winner-cover" class="winner-cover hidden">{{ overlayMsg }}</h1>
      <app-image-hint [country]="randomCountry"></app-image-hint>
      <div
        class="previous-guess-list"
        *ngFor="await; let guess; of: guesses; let i = index"
      >
        <app-previous-guess-box
          [guess]="guess"
          [index]="i"
        ></app-previous-guess-box>
      </div>
      <app-guess-box
        class="width-100"
        (guessEvent)="addGuess($event)"
      ></app-guess-box>
    </div>
  `,
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent implements OnInit {
  guesses: Guess[] = [
    {
      guess: '',
      bearing: '',
      distance: '',
    },
    {
      guess: '',
      bearing: '',
      distance: '',
    },
    {
      guess: '',
      bearing: '',
      distance: '',
    },
    {
      guess: '',
      bearing: '',
      distance: '',
    },
    {
      guess: '',
      bearing: '',
      distance: '',
    },
    {
      guess: '',
      bearing: '',
      distance: '',
    },
  ];
  randomCountry: string = '';
  randomIndex!: number;
  overlayMsg: string = '';
  guessCount: number = 0;

  constructor(private getDistanceService: GetDistanceService) {}

  async ngOnInit(): Promise<void> {
    this.guessCount = 0;
    this.randomCountry = await this.getRandomCountry();
  }

  async getRandomCountry() {
    this.randomIndex = Math.floor(Math.random() * countries.length);
    const random = countries[this.randomIndex].alpha2;
    console.log(random);
    return random;
  }

  getCountry() {
    return countries[this.randomIndex].country;
  }

  addGuess(newGuess: string) {
    const valid = countries.some((res) => res.country === newGuess);
    if (this.guessCount >= 5 && valid) {
      this.displayMessage(
        'All guesses used! The correct country was: ' +
          countries[this.randomIndex].country
      );
    }
    if (this.guessCount <= 5 && valid) {
      this.checkGuess(newGuess);
      this.guesses[this.guessCount].guess = newGuess;
    }
  }

  checkGuess(guess: string) {
    console.log(guess);
    const guessIndex = countries.findIndex((x) => x.country === guess);
    const guessAlpha = countries[guessIndex].alpha2;
    if (this.randomCountry === guessAlpha) {
      this.displayMessage('Correct! Congratulations, refresh to continue');
    } else {
      this.getDistanceAndBearing(guessAlpha);
    }
  }

  getDistanceAndBearing(guessAlpha: string) {
    this.getDistanceService
      .getDistance(guessAlpha, this.randomCountry)
      .subscribe((res: any) => {
        this.guesses[this.guessCount].distance =
          res.steps[0].distance.haversine;
        this.guesses[this.guessCount].bearing = res.steps[0].bearing.bearing;
        this.guessCount = this.guessCount + 1;
      });
  }

  displayMessage(message: string) {
    this.overlayMsg = message;
    this.guesses[this.guessCount].distance = '0';
    document.getElementById('overlay')?.classList.remove('hidden');
    document.getElementById('winner-cover')?.classList.remove('hidden');
  }
}
