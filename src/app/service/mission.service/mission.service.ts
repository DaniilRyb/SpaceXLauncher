import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IMissionRockets } from "../../models/IMissionRockets";

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  missions: IMissionRockets[] = []
  //urlLocalDataMission = "assets/missions.json"
  urlDataMission = "https://api.spacexdata.com/v5/launches"

  constructor(private http: HttpClient) {
  }

  getDataLaunch() {
    return this.http.get<IMissionRockets[]>(this.urlDataMission)
      .subscribe((data: IMissionRockets[]) => {
        this.missions = data;
        console.log(this.missions);
      })
  }
}

