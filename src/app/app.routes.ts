import {  RouterModule, Routes } from '@angular/router';

// Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NoFoundComponent } from './no-found/no-found.component';

const appRoutes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: '**', component: NoFoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});