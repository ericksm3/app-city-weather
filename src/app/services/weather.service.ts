import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';

import { CityWeather } from '@interfaces/city-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  getCityWeather(cityId: number) : Observable<CityWeather> {
    return this.http.get<CityWeather>(`${environment.baseUrl}/weather?id=${cityId}&units=metric`);
  };

  getCityHourlyWeather(cityId: number) : Observable<CityWeather> {
    return this.http.get<CityWeather>(`${environment.baseUrl}/forecast/hourly?id=${cityId}`);
  }
}

