import { Component, OnInit } from '@angular/core';

import { WeatherService } from '@services/weather.service'
import { CityService } from '@services/city.service'

import { CityWeather } from '@interfaces/city-weather'
import { City } from '@interfaces/city';


@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss'],
  providers: [ WeatherService ]
})

export class WeatherReportComponent implements OnInit {

  cityWeathers: CityWeather[] = [];

  constructor(
    private weatherService: WeatherService,
    private cityService: CityService,
    
  ) { 
    this.weatherService = weatherService;
    this.cityService = cityService;
  }

  ngOnInit(): void {
    this.handleGetCitiesWeathers();
  }

  async handleGetCitiesWeathers() {
    //get cities from CityService (mocked)
    const cities: City[] = await this.cityService.getCities();

    //building requests
    const requests = cities.map((city : any) => this.weatherService.getCityWeather(city.id));
  
    //queueing requests
    const cityWeathers : CityWeather[] = await Promise.all(requests);

    this.cityWeathers = cityWeathers;
  }
}