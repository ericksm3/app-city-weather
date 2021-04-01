import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius'
})
export class CelsiusPipe implements PipeTransform {

  transform(value: string): string {
    return `${parseInt(value, 10)} °C`;
  }

}
