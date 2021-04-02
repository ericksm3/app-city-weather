import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss']
})
export class WeatherIconComponent implements OnInit {
  @Input('icon') icon!: string;
  @Input('size') size!: string;

  readonly apiUrl: string = 'http://openweathermap.org/img/wn';

  constructor() { }

  ngOnInit(): void {
  }

}
