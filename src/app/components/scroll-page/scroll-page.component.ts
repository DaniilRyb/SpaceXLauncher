import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-page',
  templateUrl: './scroll-page.component.html',
  styleUrls: ['./scroll-page.component.css']
})
export class ScrollPageComponent {

  constructor() {
  }

  @HostListener("click", ["$event"])
  scroll(event: Event) {
    window.scrollTo(0, 0);
    console.log(event);
  }
}
