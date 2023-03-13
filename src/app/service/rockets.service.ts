import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IRocket } from "../models/IRocket";

@Injectable({
  providedIn: 'root'
})
export class RocketsService {

  rockets: IRocket[] = []

  constructor(private http: HttpClient) {
  }

  urlRockets = "https://api.spacexdata.com/v4/rockets"
  getDataRockets() {
    return this.http.get<IRocket[]>(this.urlRockets)
      .subscribe((data: IRocket[]) => {
        this.rockets = data
        console.log(this.rockets);
      })
  }


}
