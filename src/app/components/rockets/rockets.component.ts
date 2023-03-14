import { Component, OnInit } from '@angular/core';
import { RocketsService } from "../../service/rockets.service/rockets.service";

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {

  url = "https://api.spacexdata.com/v4/rockets"

  //@Input() rockets: IRocket
  constructor(public rocketsService: RocketsService) {
  }

  ngOnInit() {
  }


}
