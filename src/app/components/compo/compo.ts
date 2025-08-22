import { Component, input, Input, signal } from '@angular/core';
import { Movies } from '../../interfaces/home';

@Component({
  selector: 'app-compo',
  imports: [],
  templateUrl: './compo.html',
  styleUrl: './compo.scss'
})
export class Compo {
   baseURL:string = 'https://image.tmdb.org/t/p/w500'

  compo = input<any[]>([]); 

}
