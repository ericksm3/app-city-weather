import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timezoneDate'
})
export class TimezoneDatePipe implements PipeTransform {

  transform(dt: number, timezone: number): string {
    const d = new Date(dt * 1000);
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const city = utc + (1000 * timezone);
    return new Date(city).toLocaleTimeString('en-gb', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }

}
