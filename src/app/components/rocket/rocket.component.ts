import { Component, Input } from '@angular/core';
import { IRocket } from "../../models/IRocket";

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent {

  @Input() rocketType: IRocket


}
