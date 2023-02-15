import { Component } from '@angular/core';
import { RocketsService } from "../../service/rockets.service";

@Component({
  selector: 'app-falcon9',
  templateUrl: './falcon9.component.html',
  styleUrls: ['./falcon9.component.css']
})
export class Falcon9Component {
  constructor(public rocketsService: RocketsService) {
  }
}
