import { Component, Input, OnInit } from '@angular/core';
import { CityWeather } from '@interfaces/city-weather';

@Component({
  selector: 'app-city-weather-report',
  templateUrl: './city-weather-report.component.html',
  styleUrls: ['./city-weather-report.component.scss']
})
export class CityWeatherReportComponent implements OnInit {
  
  @Input() cityWeather!: CityWeather;

  constructor() {
    
  } 

  ngOnInit(): void {
    console.log(this.cityWeather)
  }

}
