import { countries } from '../../objects/countries';

import { Observable, map, startWith } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-guess-box',
  templateUrl: './guess-box.component.html',
  styleUrls: ['./guess-box.component.scss']
})
export class GuessBoxComponent implements OnInit {
@Output() guessEvent = new EventEmitter<string>()
countriesList: any[] = [];
filteredCountries!: Observable<string[]>;
myControl: FormControl = new FormControl();

  constructor() { }
  
  ngOnInit(): void {
    for (let country of countries) {
      this.countriesList.push(country.country)
    }

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
    return this.countriesList.filter(country =>
      country.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

}
