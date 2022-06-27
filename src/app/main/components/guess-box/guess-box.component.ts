import { Observable, map, startWith } from 'rxjs';
import { allCountries } from './../../models/country-auto-complete';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-guess-box',
  templateUrl: './guess-box.component.html',
  styleUrls: ['./guess-box.component.scss']
})
export class GuessBoxComponent implements OnInit {
@Output() guessEvent = new EventEmitter<string>()
allCountries = allCountries;
filteredCountries!: Observable<string[]>;
myControl: FormControl = new FormControl();

  constructor() { }
  ngOnInit(): void {
    this.filteredCountries = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter(val))
    );
}

  sendGuessToParent(value: string) {
    this.guessEvent.emit(value)
  }

  filter(val: string): string[] {
    return this.allCountries.filter(country =>
      country.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

}
