import { Component } from '@angular/core';

// Services
import { SidenavService } from '../services/shared/sidenav.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent{

  constructor( public _sidenav: SidenavService ){}
}
