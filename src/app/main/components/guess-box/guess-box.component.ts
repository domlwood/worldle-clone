import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-guess-box',
  templateUrl: './guess-box.component.html',
  styleUrls: ['./guess-box.component.scss']
})
export class GuessBoxComponent implements OnInit {
@Output() guessEvent = new EventEmitter<string>()
  constructor() { }
  ngOnInit(): void {
  }

  sendGuessToParent(value: string) {
    this.guessEvent.emit(value)
  }

}
