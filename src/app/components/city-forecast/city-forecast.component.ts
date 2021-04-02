import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss']
})
export class CityForecastComponent implements OnInit {

  @Input('name') name!: string;
  @Input('country') country!: string;
  @Input('weather') weather!: {
    icon: string,
    main: string,
    description: string
  };

  constructor() { }

  ngOnInit(): void { }

}
