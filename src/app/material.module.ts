import { NgModule } from '@angular/core';

// Componentes material
import { MatToolbarModule } from '@angular/material/toolbar'; // Toolbar
import { MatIconModule } from '@angular/material/icon'; // Icon
import { MatButtonModule } from '@angular/material/button'; // Buttons
import { MatSidenavModule } from '@angular/material/sidenav'; // Sidebar
import { MatListModule } from '@angular/material/list'; // List
import { MatBadgeModule } from '@angular/material/badge'; // Badge
import { MatExpansionModule } from '@angular/material/expansion'; // ExpansionPanel

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatExpansionModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatExpansionModule
  ]
})
export class MaterialModule { }
