import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movies, TV } from '../interfaces/home';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private token:string = '886ec64e82521765ea086d5fa963ab2f' 
  private allAnimationsUrl: string = 'https://api.themoviedb.org/3/discover/movie?with_genres=16&language=en-US&page=1';

  constructor(private http:HttpClient){}

    getAllAnimations(): Observable<Movies[]> {
    return this.http.get<{ results: Movies[] }>(
      this.allAnimationsUrl + `&api_key=${this.token}`
    ).pipe(
      map(res => res.results.map(movie => ({
        ...movie,
        release_date: movie.release_date?.split('-')[0] ?? '',
        vote_average: Number(movie.vote_average.toFixed(1))
      })))
    );
  }
}


  

