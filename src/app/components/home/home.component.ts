import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  arrayImg = [
    "https://images.unsplash.com/photo-1465788786008-f75a725b34e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://wallpaperaccess.com/full/418036.jpg",
    "https://live.staticflickr.com/65535/52667587548_33d9678f25_4k.jpg",
    "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://preview.redd.it/xulol31zvnby.jpg?auto=webp&s=9a4a755078bdc1dc6fa8d247728bf66b517f8ae5",
    "https://wallpapers.com/images/featured/obi5wntvz2881e6i.jpg"
  ]

  slideShowAnimation() {
    return `background: url('assets/img${2}.jpg') no-repeat fixed center center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover; `;

  }

}
