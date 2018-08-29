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


@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatExpansionModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatExpansionModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
