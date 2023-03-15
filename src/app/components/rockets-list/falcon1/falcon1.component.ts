import { Component, Input, OnInit } from '@angular/core';
import { IRocket } from "../../../models/IRocket";
import { RocketsService } from "../../../service/rockets.service/rockets.service";

@Component({
  selector: 'app-falcon1',
  templateUrl: './falcon1.component.html',
  styleUrls: ['./falcon1.component.css']
})
export class Falcon1Component implements OnInit{

  //@Input() rocketDescription: IRocket

  constructor(public rocketsService: RocketsService) {
  }

  ngOnInit(): void {
  }


}
