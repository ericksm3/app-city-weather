import { Component, OnInit } from '@angular/core';

import { CityService } from '@services/city.service';

import { City } from '@interfaces/city';


@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})

export class WeatherReportComponent implements OnInit {

  cities: City[] = [];

  location = 'EU';

  readonly options = [
    { value: 'EU', label: 'European Cities' },
    { value: 'BR', label: 'Brazilian Cities' },
    { value: 'AS', label: 'Asians Cities' }
  ];

  constructor(
    private cityService: CityService,
  ) {
    this.cityService = cityService;
  }

  ngOnInit(): void {
    this.handleGetCitiesWeathers();
  }

  setLocation(e: Event): void{
    const target = e.target as HTMLSelectElement;
    this.location = target.value;
    this.handleGetCitiesWeathers();
  }

  async handleGetCitiesWeathers(): Promise<void> {
    // fetching cities from CityService (mocked)
    const cities: City[] = await this.cityService.getCities(this.location);
    this.cities = cities;
  }
}
