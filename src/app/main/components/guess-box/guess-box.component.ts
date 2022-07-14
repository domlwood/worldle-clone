import { countries } from '../../objects/countries';

import { Observable, map, startWith } from 'rxjs';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
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
guess!: string;
@ViewChild(MatAutocompleteTrigger) autocomplete!: MatAutocompleteTrigger;


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

  sendGuessToParent() {
    this.guessEvent.emit(this.guess)
    this.guess = ''
  }

  closePanel() {
    this.autocomplete.closePanel(); 
  }

  filter(val: string): string[] {
    return this.countriesList.filter(country =>
      country.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
}
