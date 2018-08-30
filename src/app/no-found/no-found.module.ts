import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { NoFoundComponent } from './no-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NoFoundComponent
  ],
  exports: [
    NoFoundComponent
  ]
})
export class NoFoundModule { }
