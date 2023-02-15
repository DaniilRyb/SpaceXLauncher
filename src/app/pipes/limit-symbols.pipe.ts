import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitSymbols'
})
export class LimitSymbolsPipe implements PipeTransform {

  transform(description: string, limit: number): string {
    if (description.length > limit) {
      return description.slice(0, limit) + "...";
    }
    return description;

  }

}
