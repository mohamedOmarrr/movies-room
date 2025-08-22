import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Animation } from './components/animation/animation';
import { Movie } from './components/movie/movie';
import { Series } from './components/series/series';
import { People } from './components/people/people';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:Home,title:'Home Page'},
    {path:'anime', component:Animation,title:'Animation Page'},
    {path:'movie', component:Movie,title:'Movie Page'},
    {path:'tv', component:Series,title:'Tvs Page'},
    {path:'people', component:People,title:'Actress Page'},
    {path:'**', component:NotFound}
];
