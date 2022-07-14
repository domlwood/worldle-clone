import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Country } from './../models/country';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class GetDistanceService {
  constructor(private http: HttpClient) {}

  getDistance(guessDestination: Country, actualDestination: Country) {
    const guesses = [
      {
        latitude: guessDestination.latitude,
        longitude: guessDestination.longitude,
      },
      {
        latitude: actualDestination.latitude,
        longitude: actualDestination.longitude,
      },
    ];
    console.log(environment.apiKey)
    JSON.stringify(guesses);
    return this.http.get<{}>('https://worldle-backend.herokuapp.com/distance', {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Basic ${environment.apiKey}`
      }),
      params: new HttpParams({
        fromObject: { distance: JSON.stringify(guesses) },
      }),
    });
  }
}
