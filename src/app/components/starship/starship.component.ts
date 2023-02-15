import { Component } from '@angular/core';
import { RocketsService } from "../../service/rockets.service";

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent {

  constructor(public rocketsService: RocketsService) {
  }
}
