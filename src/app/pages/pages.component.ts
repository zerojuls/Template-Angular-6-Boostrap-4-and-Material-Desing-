import { Component } from '@angular/core';

// Services
import { SidenavService } from '../services/shared/sidenav.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent{

  windows:number[] = [1000, 1000];

  constructor( public _sidenav: SidenavService ){
    this.tamWindows().subscribe( (resp:any[]) => {
      this.windows = resp;
    });
  }


  // Adjusts the size of the screen to the device on which it is used every 0.5s
  tamWindows() {
    return new Observable( observer => {
      setInterval( () => {
        var tam = [0, 0];
        if (typeof window.innerWidth != 'undefined'){
          tam = [window.innerWidth,window.innerHeight];
        }else if (typeof document.documentElement != 'undefined'
            && typeof document.documentElement.clientWidth !=
            'undefined' && document.documentElement.clientWidth != 0){
          tam = [document.documentElement.clientWidth, document.documentElement.clientHeight];
        }else   {
          tam = [
              document.getElementsByTagName('body')[0].clientWidth,
              document.getElementsByTagName('body')[0].clientHeight
          ];
        }
        observer.next(tam);
      }, 500)
    });
  }
}
