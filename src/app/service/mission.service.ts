import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IMissionRockets } from "../models/IMissionRockets";

@Injectable({
  providedIn: 'root'
})
export class MissionService implements OnInit {

  missions: IMissionRockets[] = []
  //urlData = "assets/AllMissionsRockets.json"
  url = "https://api.spacexdata.com/v5/launches"

  constructor(private http: HttpClient) {
  }

  getDataLaunch() {
    return this.http.get<IMissionRockets[]>(this.url)
      .subscribe((data: IMissionRockets[]) => {
        this.missions = data;
        console.log(this.missions);

      })
  }

  ngOnInit() {
  }
}

