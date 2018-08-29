import { Component } from '@angular/core';

// Services
import { SidenavService } from '../services/shared/sidenav.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent{

  windows:number[];

  constructor( public _sidenav: SidenavService ){
    this.windows = this.tamVentana();
  }

  tamVentana() {
    var tam = [0, 0];
    if (typeof window.innerWidth != 'undefined')
    {
      tam = [window.innerWidth,window.innerHeight];
    }
    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0)
    {
      tam = [
          document.documentElement.clientWidth,
          document.documentElement.clientHeight
      ];
    }
    else   {
      tam = [
          document.getElementsByTagName('body')[0].clientWidth,
          document.getElementsByTagName('body')[0].clientHeight
      ];
    }
    return tam;
  }
}
