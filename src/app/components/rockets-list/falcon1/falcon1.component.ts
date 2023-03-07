import { Component, Input } from '@angular/core';
import { IRocket } from "../../../models/IRocket";
import { RocketsService } from "../../../service/rockets.service";

@Component({
  selector: 'app-falcon1',
  templateUrl: './falcon1.component.html',
  styleUrls: ['./falcon1.component.css']
})
export class Falcon1Component {

  @Input() rocketDescription: IRocket

  url = "https://www.youtube.com/embed/CLaSIWSeMv0"

  constructor(public rocketsService: RocketsService) {
  }


}
