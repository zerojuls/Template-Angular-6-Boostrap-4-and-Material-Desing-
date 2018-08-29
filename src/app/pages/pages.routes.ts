import {  RouterModule, Routes } from '@angular/router';

// Componentes
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

const PagesRoutes: Routes = [
   {
      path: '',
      component: PagesComponent,
      children: [
         { path: 'home', component: HomeComponent },
         { path: '', redirectTo: '/home', pathMatch: 'full' }
      ]
   }
];

export const PAGES_ROUTES = RouterModule.forChild(PagesRoutes);