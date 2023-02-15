import { Component, Input, OnInit } from '@angular/core';
import { IRocket } from "../../models/IRocket";

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  @Input() rocketType: IRocket

  constructor() {
  }

  ngOnInit() {
  }

}
