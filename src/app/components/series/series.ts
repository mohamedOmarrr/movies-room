import { Component, signal } from '@angular/core';
import { Compo } from '../compo/compo';
import { TV } from '../../interfaces/home';
import { TvService } from '../../services/tv-service';

@Component({
  selector: 'app-series',
  imports: [Compo],
  templateUrl: './series.html',
  styleUrl: './series.scss'
})
export class Series {
  s = signal<TV[]>([]);

  constructor(private series:TvService){}

   ngOnInit(): void {
    this.series.getAllTVs().subscribe(data => {
      this.s.set(data)      
    });
}

}
