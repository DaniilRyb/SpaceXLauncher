import { Component, Input } from '@angular/core';
import { IMissionRockets } from "../../models/IMissionRockets";


@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent {

  @Input() mission: IMissionRockets

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
  }


}