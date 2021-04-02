import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius'
})
export class CelsiusPipe implements PipeTransform {

  transform(value: number|undefined): string|undefined {
    if (typeof value !== 'undefined'){
      return `${parseInt(value.toFixed(), 10)} °C`;
    }
    return value;
  }
}
