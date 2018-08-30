import { NgModule } from '@angular/core';

// Componentes material
import { MatToolbarModule } from '@angular/material/toolbar'; // Toolbar
import { MatIconModule } from '@angular/material/icon'; // Icon
import { MatButtonModule } from '@angular/material/button'; // Buttons
import { MatSidenavModule } from '@angular/material/sidenav'; // Sidebar
import { MatListModule } from '@angular/material/list'; // List
import { MatBadgeModule } from '@angular/material/badge'; // Badge
import { MatExpansionModule } from '@angular/material/expansion'; // ExpansionPanel
import { MatMenuModule } from '@angular/material/menu'; // Menu
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Progress Spinner


@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatExpansionModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatExpansionModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
