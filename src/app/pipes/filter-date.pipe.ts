import { Pipe, PipeTransform } from '@angular/core';
import { IMissionRockets } from "../models/IMissionRockets";

@Pipe({
  name: 'filterDate'
})
export class FilterDatePipe implements PipeTransform {
  transform(mission: IMissionRockets[], dateMission: string): IMissionRockets[] {
    if (dateMission === "" || dateMission == "Выбрать год") return mission;
    return mission.filter(date => date.date_local.substring(0, 4) === dateMission);
  }
}
