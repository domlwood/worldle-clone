import { GetDistanceService } from './../../services/get-distance.service';
import { Component, OnInit } from '@angular/core';
import { countryImgCodes } from '../../models/country-images';
import { countries } from '../../models/countries';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent implements OnInit {
  guesses = [
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

  randomCountry = '';
  overlayMsg: string = ''
  currentGuess = 0;
  getCountryAttempts = 0;
  currentBearing = '';
  distance!: number;

  constructor(private getDistanceService: GetDistanceService) {}

  async ngOnInit(): Promise<void> {
    this.currentGuess = 0;
    this.randomCountry = await this.getRandomCountry()
  }

  async getRandomCountry() {
    const random =
      countryImgCodes[Math.floor(Math.random() * countryImgCodes.length)];
    if (countries[random]) {
      console.log(countries[random]);
      return random;
    } else {
      if (this.getCountryAttempts < 10) {
        this.getRandomCountry();
        this.getCountryAttempts++;
        return 'Error loading country: ' + random + ' ...trying again';
      } else {
        return "We're currently experiencing issues, please try again later.";
      }
    }
  }

  getCountry() {
    return countries[this.randomCountry];
  }

  getKeyByValue(object: any, value: string) {
    return String(Object.keys(object).find((key) => object[key] === value));
  }

  addGuess(newGuess: string) {
    if (this.currentGuess <= 6) {
      this.guesses[this.currentGuess].guess = newGuess;
      this.checkGuess(newGuess);
    } else {
      this.displayMessage('All guesses used! The correct country was: ' + this.randomCountry)
    }
  }

  checkGuess(guess: string) {
    console.log(guess);
    const guessKey = this.getKeyByValue(countries, guess);
    if (this.randomCountry === guessKey) {
      this.displayMessage('Correct! Congratulations, refresh to continue')
    } else {
      this.getDistanceAndBearing(guessKey)
    }
  }

  getDistanceAndBearing(guessKey: string) {
    this.getDistanceService
    .getDistance(guessKey, this.randomCountry)
    .subscribe((res: any) => {
      this.guesses[this.currentGuess].distance =
        res.steps[0].distance.haversine;
      this.guesses[this.currentGuess].bearing =
        res.steps[0].bearing.bearing;
      this.currentGuess++;
    });
  }

  displayMessage(message: string) {
    this.overlayMsg = message
    this.guesses[this.currentGuess].distance = '0'
    document.getElementById('overlay')?.classList.remove('hidden')
    document.getElementById('winner-cover')?.classList.remove('hidden')
  }
}
