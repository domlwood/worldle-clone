import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuessEventService {
  private guessEvent: BehaviorSubject<boolean>;
  constructor() {
    this.guessEvent = new BehaviorSubject<boolean>(false);
  }

  setValue(newGuess: any): void {
    this.guessEvent.next(newGuess);
  }

  getValue(): Observable<boolean> {
    return this.guessEvent.asObservable();
  }
}
