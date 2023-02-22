import { Component } from '@angular/core';
import { MissionService } from "../../service/mission.service";


@Component({
  selector: 'app-list-launches',
  templateUrl: './list-launches.component.html',
  styleUrls: ['./list-launches.component.css']
})
export class ListLaunchesComponent {
  name = ""
  date = ""
  landing_success: boolean
  count = "" // здесь лучше сделать все типы string так как input видимо не обрабатывает тип number
  IsShowed = false
  status = "Показать"

  countsLaunch = ["1", "2", "3", "4", "5", "6", '7', "8", "9", "10", "11", "12", "13", "14"]
  yearList = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018",
    "2019", "2020", "2021", "2022"]

  constructor(public rocketService: MissionService) {

  }

  IsShowAllMissions() {
    this.IsShowed = !this.IsShowed
    if (!this.IsShowed) {
      this.status = "Скрыть"
    }
    if (this.IsShowed) {
      this.status = "Показать"
    }
  }

}
