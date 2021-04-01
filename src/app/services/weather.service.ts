import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { CityWeather, Hourly } from '@interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  getCityWeather(cityId: number): Observable<CityWeather> {
    return this.http.get<CityWeather>(`${environment.baseUrl}/weather?id=${cityId}`);
  }

  getCityHourlyWeather(lat: number, lon: number): Observable<Hourly> {
    return this.http.get<Hourly>(`${environment.baseUrl}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts`);
  }
}

