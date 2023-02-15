import { Pipe, PipeTransform } from '@angular/core';
import { IMissionRockets } from "../models/IMissionRockets";

@Pipe({
  name: 'filterDate'
})
export class FilterDatePipe implements PipeTransform {
  transform(mission: IMissionRockets[], dateMission: string): IMissionRockets[] {
    if (dateMission === "") return mission;
    /*return mission
      .filter(date => date.date_local.toLowerCase()
        .includes(dateMission.toLowerCase()))*/
    return mission.filter(date => date.date_local.substring(0, 4) === dateMission);

  }


}
