import { Guess } from '../models/guess';
import { countries } from '../objects/countries';
import { GetDistanceService } from './../services/get-distance.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
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
  randomCountry!: Country;
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
    const random = countries[this.randomIndex];
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
    const guessIndex = countries.findIndex((x) => x.country === guess);
    const guessObject = countries[guessIndex];
    if (this.randomCountry.alpha2 === guessObject.alpha2) {
      this.displayMessage('Correct! Congratulations, refresh to continue');
    } else {
      this.getDistanceAndBearing(guessObject);
    }
  }

  getDistanceAndBearing(guessAlpha: Country) {
    this.getDistanceService
      .getDistance(guessAlpha, this.randomCountry)
      .subscribe((res: any) => {
        this.guesses[this.guessCount].distance =
          res.distance
        this.guesses[this.guessCount].bearing = res.bearing;
        this.guessCount = this.guessCount + 1;
      });
  }

  displayMessage(message: string) {
    this.overlayMsg = message;
    this.guesses[this.guessCount].distance = '0';
    document.getElementById('overlay')?.classList.remove('hidden');
    document.getElementById('overlay-msg')?.classList.remove('hidden');
  }
}
