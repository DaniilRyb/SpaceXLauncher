import { Component, OnInit } from '@angular/core';
import { RocketsService } from "../../../service/rockets.service/rockets.service";

@Component({
  selector: 'app-falcon9',
  templateUrl: './falcon9.component.html',
  styleUrls: ['./falcon9.component.css']
})
export class Falcon9Component implements OnInit{
  constructor(public rocketsService: RocketsService) {
  }

  ngOnInit(): void {
  }
}
