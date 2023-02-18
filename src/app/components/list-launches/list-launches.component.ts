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
