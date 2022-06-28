import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Guess } from '../models/guesses';

@Injectable({
  providedIn: 'root'
})
export class GuessService {
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

  getGuessObject(): any {
    return of(this.guesses);
  }
  constructor() { }
}
