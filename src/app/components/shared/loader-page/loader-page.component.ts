import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader-page',
  templateUrl: './loader-page.component.html',
  styleUrls: ['./loader-page.component.css']
})
export class LoaderPageComponent implements OnInit {

  @Input() time = 2000;
  spinner = true;

  constructor() { }

  ngOnInit() {
    setTimeout( () => {
      this.spinner = false;
    }, this.time);
  }

}
