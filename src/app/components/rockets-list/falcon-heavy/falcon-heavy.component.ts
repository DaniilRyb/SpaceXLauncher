import { Component, OnInit } from '@angular/core';
import { RocketsService } from "../../../service/rockets.service/rockets.service";

@Component({
  selector: 'app-falcon-heavy',
  templateUrl: './falcon-heavy.component.html',
  styleUrls: ['./falcon-heavy.component.css']
})
export class FalconHeavyComponent implements OnInit{


  constructor(public rocketsService: RocketsService) {
  }

  ngOnInit(): void {
  }
}
