import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WeatherService } from '@services/weather.service';
import { environment } from '@environments/environment';

import { OpenWeatherInterceptor } from './open-weather.interceptor';
import { OPEN_WEATHER_API_KEY, UNITS, UNIT_TYPE } from '@common/constants';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

describe('OpenWeatherInterceptor', () => {
  let httpMock: HttpTestingController;
  let service: WeatherService;

  let httpRequest: TestRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ WeatherService,  {
        provide: HTTP_INTERCEPTORS,
        useClass: OpenWeatherInterceptor,
        multi: true,
      }, ],
      imports: [ HttpClientTestingModule ]
    });

    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    service.getCityWeather(1).subscribe(response => {
      expect(response).toBeTruthy();
    });

    httpRequest = httpMock.expectOne(
      req => req.url.includes(`${environment.baseUrl}/weather`)
    );
  });

  it('should add apiKey to request queryParams', () => {
    expect(httpRequest.request.params.has(OPEN_WEATHER_API_KEY)).toBeTruthy();
  });

  it('should add units to request queryParams', () => {
    expect(httpRequest.request.params.get(UNITS)).toBe(UNIT_TYPE);
  });
});
