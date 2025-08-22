import { Component, signal } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { Movies } from '../../interfaces/home';
import { Compo } from '../../components/compo/compo'; 

@Component({
  selector: 'app-movie',
  templateUrl: './movie.html',
  styleUrl: './movie.scss',
  imports: [Compo]
})
export class Movie {
  m = signal<Movies[]>([]);

  constructor(private movies: MovieService) {}

  ngOnInit(): void {
    this.movies.getAllMovies().subscribe(data => {
      this.m.set(data)
    })
  }
}
