import { Component, OnInit } from '@angular/core';

import { WeatherService } from '@services/weather.service'
import { CityService } from '@services/city.service'

import { CityWeather } from '@interfaces/city-weather'
import { City } from '@interfaces/city';


@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss'],
  providers: [ CityService ]
})

export class WeatherReportComponent implements OnInit {

  cities: City[] = [];

  constructor(
    private cityService: CityService,
    
  ) { 
    this.cityService = cityService;
  }

  ngOnInit(): void {
    this.handleGetCitiesWeathers();
  }

  async handleGetCitiesWeathers(): Promise<void> {
    //get cities from CityService (mocked)
    const cities: City[] = await this.cityService.getCities();
    this.cities = cities;
  }
}