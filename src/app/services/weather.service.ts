import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CityWeather } from '@interfaces/city-weather';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  getCityWeather(cityId: number) : Promise<CityWeather> {
    return this.http.get<CityWeather>(`${environment.baseUrl}/weather?id=${cityId}`).toPromise();
  };
}

