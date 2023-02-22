import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  /* slideShowAnimation() {
     return `background: url('assets/img${2}.jpg') no-repeat fixed center center;
     background-size: cover;
     -webkit-background-size: cover;
     -moz-background-size: cover;
     -o-background-size: cover; `;

   }*/

  items = [
    'assets/img.jpg',
    'assets/img2.jpg',
    'assets/img3.jpg',
    'assets/img4.jpg',
    'assets/img5.jpg',
    'assets/img6.webp',
    'assets/img7.jpg',
    'assets/img8.jpg'
  ];

}
