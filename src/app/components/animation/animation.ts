import { Component, signal } from '@angular/core';
import { Compo } from '../compo/compo';
import { Movies } from '../../interfaces/home';
import { AnimeService } from '../../services/anime-service';

@Component({
  selector: 'app-animation',
  imports: [Compo],
  templateUrl: './animation.html',
  styleUrl: './animation.scss'
})
export class Animation {
  a = signal<Movies[]>([]);

  constructor(private animes:AnimeService){}

   ngOnInit(): void {
    this.animes.getAllAnimations().subscribe(data => {
      this.a.set(data)
    });
}

}
