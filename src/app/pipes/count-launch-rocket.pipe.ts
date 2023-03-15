import { Pipe, PipeTransform } from '@angular/core';
import { IMissionRockets } from "../models/IMissionRockets";

@Pipe({
  name: 'filterCountLaunchRocket'
})
export class CountLaunchRocketPipe implements PipeTransform {

  transform(mission: IMissionRockets[], count: string): IMissionRockets[] {
    if (count === "" || count === "Показать все") return mission;
    return mission.filter(oneMission => oneMission.cores[0].flight === Number(count));
    //&& oneMission.cores[0].flight !== null)
  }
}
