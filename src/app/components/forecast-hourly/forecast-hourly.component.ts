import { Component, OnInit, Input } from '@angular/core';
import { CityWeather } from '@interfaces/city-weather';

@Component({
  selector: 'app-forecast-hourly',
  templateUrl: './forecast-hourly.component.html',
  styleUrls: ['./forecast-hourly.component.scss']
})
export class ForecastHourlyComponent implements OnInit {

  @Input('hours') hours!: CityWeather[];
  @Input('timezone') timezone!: number;

  constructor() {

  }

  ngOnInit(): void { }

}
