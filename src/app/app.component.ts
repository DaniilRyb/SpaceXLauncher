import { Component, OnInit } from '@angular/core';
import { RocketsService } from "./service/rockets.service";
import { MissionService } from "./service/mission.service/mission.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public rocketsService: RocketsService,
              public missionService: MissionService,
              public translate: TranslateService) {
  }


  ngOnInit() {
    this.missionService.getDataLaunch()
    this.rocketsService.getDataRockets()

  }

  setLocale(locale: string) {
    localStorage.setItem('locale', locale)
    this.translate.use(locale)
  }


}
