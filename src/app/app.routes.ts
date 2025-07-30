import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Epaper } from './pages/epaper/epaper';

export const routes: Routes = [

  {path:"" ,component:Home ,},
  {path:"home" ,component:Home ,},
  {path:"epaper" ,component:Epaper ,}
];
