import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MissionService } from "../../service/mission.service/mission.service";
import { FormControl } from "@angular/forms";
import { map, Observable, startWith } from "rxjs";
import { IMissionRockets } from "../../models/IMissionRockets";


@Component({
  selector: 'app-list-launches',
  templateUrl: './list-launches.component.html',
  styleUrls: ['./list-launches.component.css']
})
export class ListLaunchesComponent implements OnInit {

  @Output() year: EventEmitter<string> = new EventEmitter<string>()
  @Input() missionListName: IMissionRockets[]
  name = ""
  date = ""
  landing_success: boolean | string = ''
  count = "" // здесь лучше сделать все типы string так как input видимо не обрабатывает тип number
  IsShowed = false
  countsLaunchRockets = ["1", "2", "3", "4", "5", "6", '7', "8", "9", "10", "11", "12", "13", "14"]
  yearList = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018",
    "2019", "2020", "2021", "2022"]
  myControl = new FormControl('');
  mission: string[]
  filteredOptions: Observable<string[]>;

  constructor(public missionService: MissionService) {
    console.log("constructor");

  }

  EmitYear(year: string) {
    this.year.emit(year);
    console.log("year ", year);
  }


  _missionListNameAll(): string[] {
    const missionsNameList: string[] = [];
    const rocketsService = this.missionService.missions;
    for (let i = 0; i < rocketsService.length; i++) {
      missionsNameList.push(rocketsService[i].name);
    }
    return missionsNameList;
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.mission = this._missionListNameAll()
    this.missionListName = this.missionService.missions
    console.log(this.missionListName);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    )
  }

  _filter(value: string): string[] {
    return this.mission.filter(option => option.toLowerCase().includes(value.toLowerCase()));
  }
}
