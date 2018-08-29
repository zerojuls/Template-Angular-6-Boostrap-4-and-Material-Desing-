import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { PAGES_ROUTES } from './pages.routes';

// Modules
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

// Components
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ComponentsModule,
    PAGES_ROUTES,
  ],
  declarations: [
    PagesComponent,
    HomeComponent
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
