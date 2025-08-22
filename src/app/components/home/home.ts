import { Component, OnInit, signal } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import { Actor, Movies, TV } from '../../interfaces/home';
import { HomeService } from '../../services/home-service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Carousel,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  movies = signal<Movies[]>([])
  tv = signal<TV[]>([]);
  anime = signal<Movies[]>([]);
  actor = signal<Actor[]>([]);
  constructor(private homeServe:HomeService){}

  ngOnInit(): void {
  this.homeServe.getMovie().subscribe(data => {
    this.movies.set(data)
    
  });

  this.homeServe.getTVs().subscribe(data => {
    this.tv.set(data)
     
  });

  this.homeServe.getTopRatedAnimation().subscribe(data => {
    this.anime.set(data)
    
  });

  this.homeServe.getActors().subscribe(data => {
    this.actor.set(data)
    
  });
}
}
