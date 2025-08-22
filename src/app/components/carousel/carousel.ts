import { AfterViewInit, Component, ElementRef, input, Input, OnDestroy, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';

import { HomeService } from '../../services/home-service';

// import { Product } from '../product';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss'
})
export class Carousel implements AfterViewInit, OnDestroy {
  constructor(private render: Renderer2) {}

  baseURL:string = 'https://image.tmdb.org/t/p/w500'
  current = 0;
  interval!: number;

  carouselHOme = input<any[]>([]); 
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ViewChildren('card') cards!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
   
    setTimeout(() => {
      if (this.cards.length > 0) {
        this.startInterval();
      }
    });
  }

  startInterval() {
    this.interval = window.setInterval(() => this.next(), 3000);
  }

  pause() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  resume() {
    this.startInterval();
  }

  next() {
    if (this.cards.length === 0) return;

    if (this.current < this.cards.length - 1) {
      this.current++;
    } else {
      this.current = 0;
    }
    this.carouselMove();
  }

  prev() {
    if (this.cards.length === 0) return;

    if (this.current > 0) {
      this.current--;
    } else {
      this.current = this.cards.length - 1;
    }
    this.carouselMove();
  }

  carouselMove() {
    if (this.cards.length === 0 || !this.wrapper) return;

    const cardWidth = this.cards.first.nativeElement.offsetWidth;
    const jump = -(this.current * cardWidth);

    this.render.setStyle(
      this.wrapper.nativeElement,
      'transform',
      `translateX(${jump}px)`
    );
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
