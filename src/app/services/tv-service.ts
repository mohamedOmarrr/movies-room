import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TV } from '../interfaces/home';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  private token:string = '886ec64e82521765ea086d5fa963ab2f' 
  private allTVsUrl: string = 'https://api.themoviedb.org/3/discover/tv?language=en-US&page=1';

  constructor(private http:HttpClient){}

    getAllTVs(): Observable<TV[]> {
    return this.http.get<{ results: TV[] }>(
      this.allTVsUrl + `&api_key=${this.token}`
    ).pipe(
      map(res => res.results.map(tv => ({
        ...tv,
        first_air_date: tv.first_air_date?.split('-')[0] ?? '',
        vote_average: Number(tv.vote_average.toFixed(1))
      })))
    );
  }
}
