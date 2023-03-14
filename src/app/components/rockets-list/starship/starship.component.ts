import { Component, OnInit } from '@angular/core';
import { RocketsService } from "../../../service/rockets.service/rockets.service";

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit{

  constructor(public rocketsService: RocketsService) {
  }
  ngOnInit() {
  }
}
