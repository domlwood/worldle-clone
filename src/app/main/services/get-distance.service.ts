import { Country } from './../models/country';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GetDistanceService {
  constructor(private http: HttpClient) {}

  getDistance(guessDestination: Country, actualDestination: Country) {
    const guesses = [
      {
        latitude: guessDestination.latitude,
        longitude: guessDestination.longitude
      },
      {
        latitude: actualDestination.latitude,
        longitude: actualDestination.longitude
      }
    ];
    JSON.stringify(guesses)
    return this.http
      .get<{}>('https://worldle-backend.herokuapp.com/distance', {
        params: new HttpParams({
          fromObject: { distance: JSON.stringify(guesses) },
        }),
      })
      
  }

//   getDistance(guessDestination: string, actualDestination: string) {
//     const guesses = [
//       {
//         t: guessDestination,
//       },
//       {
//         t: actualDestination,
//       },
//     ];

//     return this.http
//       .get<{}>('http://www.distance24.org/route.json', {
//         params: new HttpParams().set('stops', `${guessDestination}|${actualDestination}`)
//         ,
//       })
//   }


  // getDistance(guessDestination: string, actualDestination: string) {
  //   return this.http
  //     .get<{}>('https://api.distancematrix.ai/maps/api/distancematrix/json', {
  //       params: new HttpParams({
  //         fromObject: { origins: guessDestination, destinations: actualDestination, key: 'rPjOAe0m09zfvKSdjMpwTu5asr8F9' },
  //       }),
  //     })
  // }
}