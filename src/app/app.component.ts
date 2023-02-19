import { Component, OnInit } from '@angular/core';
import { MissionService } from "./service/mission.service";
import { RocketsService } from "./service/rockets.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private missionService: MissionService,
              public rocketsService: RocketsService) {
  }

  ngOnInit() {
    this.missionService.getDataLaunch()
    this.rocketsService.getDataRockets()

  }


}
