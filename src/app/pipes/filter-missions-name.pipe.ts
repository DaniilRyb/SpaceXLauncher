import { Pipe, PipeTransform } from '@angular/core';
import { IMissionRockets } from "../models/IMissionRockets";

@Pipe({
  name: 'filterMissionsName'
})
export class FilterMissionsNamePipe implements PipeTransform {

  transform(mission: IMissionRockets[], missionName: string): IMissionRockets[] {
    if (missionName === "") return mission;
    return mission.filter(name => name.name.toLowerCase().includes(missionName.toLowerCase().trim()));
  }
}
