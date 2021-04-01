import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timezoneDay'
})
export class TimezoneDayPipe implements PipeTransform {

  transform(dt: number, timezone: number): string {
    const d = new Date(dt * 1000);
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const city = utc + (1000 * timezone);
    return new Date(city).toLocaleDateString('en-gb');
  }

}
