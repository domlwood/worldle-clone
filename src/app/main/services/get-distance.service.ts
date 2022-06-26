import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GetDistanceService {
  constructor(private http: HttpClient) {}

  getDistance(guessDestination: string, actualDestination: string) {
    const guesses = [
      {
        t: guessDestination,
      },
      {
        t: actualDestination,
      },
    ];

    return this.http
      .get<{}>('https://distanceto.p.rapidapi.com/get', {
        headers: new HttpHeaders({
          'X-RapidAPI-Key':
            'bd4b55f91bmshf43238f0b13faeep193717jsn464f83b16ec8',
        }),
        params: new HttpParams({
          fromObject: { route: JSON.stringify(guesses), car: false },
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