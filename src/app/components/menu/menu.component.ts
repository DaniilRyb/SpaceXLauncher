import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @HostBinding('class')
  hostClass = 'hidden'
  private skipClick = false

  show() {
    this.hostClass = ''
    this.skipClick = true
  }

  @HostListener('window:click', ['$event'])
  hide() {
    if (this.skipClick) {
      this.skipClick = false
      return;
    }
    this.hostClass = 'hidden'
  }

  @HostListener('click', ['$event'])
  hostClick(event: Event) {
    console.log('click', event)
  }
}
