import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-previous-guess-box',
  templateUrl: './previous-guess-box.component.html',
  styleUrls: ['./previous-guess-box.component.scss'],
})
export class PreviousGuessBoxComponent implements OnInit {
  @Input() guess: any;
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

  
  ngOnInit(): void {}


}
