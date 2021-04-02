import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { mockCityWeather, mockHours } from '@common/mocks';
import { environment } from '@environments/environment';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should allow to call getCityWeather', () => {
    const cityId = 1;
    service.getCityWeather(cityId).subscribe(response => {
      expect(response).toEqual(mockCityWeather);
    });

    httpMock.expectOne(`${environment.baseUrl}/weather?id=${cityId}`).flush(mockCityWeather);
  });

  it('should allow to call getCityHourlyWeather', () => {
    const lat = 1;
    const lon = 2;
    service.getCityHourlyWeather(lat, lon).subscribe(response => {
      expect(response).toEqual(mockHours);
    });

    httpMock.expectOne(`${environment.baseUrl}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts`).flush(mockHours);
  });
});
