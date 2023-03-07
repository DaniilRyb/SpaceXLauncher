import { Component, OnInit } from '@angular/core';
import { RocketsService } from "./service/rockets.service";
import { MissionService } from "./service/mission.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public rocketsService: RocketsService,
              public missionService: MissionService) {
  }

  ngOnInit() {
    this.missionService.getDataLaunch()
    this.rocketsService.getDataRockets()

  }


}
