import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor, Movies, TV } from '../interfaces/home';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private token:string = '886ec64e82521765ea086d5fa963ab2f' 
  private comingMovie:string = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
  private ratedAnimation:string = 'https://api.themoviedb.org/3/discover/movie?with_genres=16&sort_by=vote_average.desc&vote_count.gte=100&language=en-US&page=1'
  private onAir:string = 'https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1'
  private actor:string = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1'
  baseURL:string = 'https://image.tmdb.org/t/p/w500'



  constructor(private http:HttpClient){}

  getMovie(): Observable<Movies[]> {
  return this.http.get<{ results: Movies[] }>(
    this.comingMovie + `&api_key=${this.token}`
  ).pipe(
    map(res => res.results.map(movie => ({
      ...movie,
      release_date: movie.release_date.split('-')[0],
      vote_average: Number(movie.vote_average.toFixed(1))
    })))
  );
}

getTVs(): Observable<TV[]> {
  return this.http.get<{ results: TV[] }>(
    this.onAir + `&api_key=${this.token}`
  ).pipe(
    map(res => res.results.map(tv => ({
      ...tv,
      first_air_date: tv.first_air_date?.split('-')[0],
      vote_average: Number(tv.vote_average.toFixed(1))
    })))
  );
}


getTopRatedAnimation(): Observable<Movies[]> {
  return this.http.get<{ results: Movies[] }>(
    this.ratedAnimation + `&api_key=${this.token}`
  ).pipe(
    map(res => res.results.map(movie => ({
      ...movie,
      release_date: movie.release_date?.split('-')[0] ?? '', 
      vote_average: Number(movie.vote_average.toFixed(1))   
    })))
  );
}

getActors(): Observable<Actor[]> {
  return this.http.get<{ results: Actor[] }>(
    this.actor + `&api_key=${this.token}`
  ).pipe(
    map(res => res.results.map(actor => ({
      ...actor,
      profile_path: actor.profile_path,          
      name: actor.name,                        
      known_for_department: actor.known_for_department,
      popularity: Number(actor.popularity.toFixed(1)) 
    })))
  );
}

}
