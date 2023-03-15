import { Pipe, PipeTransform } from '@angular/core';
import { IMissionRockets } from "../models/IMissionRockets";

@Pipe({
  name: 'filterIsSuccessLaunch'
})
export class SuccessLaunchPipe implements PipeTransform {
  transform(mission: IMissionRockets[], IsSuccess: boolean | string): IMissionRockets[] {
    if (IsSuccess === '') return mission
    else if (IsSuccess) {
      return mission.filter(m => m.cores[0].landing_success);
    }
    return mission.filter(m => !m.cores[0].landing_success && m.cores[0].landing_success === null);
  }
}

