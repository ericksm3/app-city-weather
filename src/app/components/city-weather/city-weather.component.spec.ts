import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { Type } from '@angular/core';

import { CityWeatherComponent } from './city-weather.component';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';

import { WeatherService } from '@services/weather.service';
import { environment } from '@environments/environment';
import { mockCityWeather, mockHours } from '@common/mocks';
import { Themes } from '@common/theme';
import { CityWeather } from '@interfaces/city-weather';

describe('CityWeatherComponent', () => {
  let component: CityWeatherComponent;
  let fixture: ComponentFixture<CityWeatherComponent>;
  let httpMock: HttpTestingController;

  const props = {
    city: {
      id: 1,
      name: '2'
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityWeatherComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        WeatherService,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherComponent);
    component = fixture.componentInstance;
    component.city = props.city;

    httpMock = fixture.debugElement.injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);

    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Initial load', () => {
    beforeEach(() => {
      httpMock.expectOne({
        url: `${environment.baseUrl}/weather?id=${props.city.id}`,
        method: 'GET'
      }).flush(mockCityWeather);
    });

    it('it should set cityWeather on load', () => {
      expect(component.cityWeather).toEqual(mockCityWeather);
    });

    it('it should set customTheme on load', () => {
      expect(component.customTheme).not.toBeUndefined();
    });

    it('should allow to get the current theme', () => {
      expect(component.getCustomTheme()).toEqual(component.customTheme);
    });
  });

  describe('Custom themes', () => {
    let customMock: CityWeather;

    beforeEach(() => {
      customMock = {
        ...mockCityWeather,
        sys: {
          country: 'country',
          id: 99,
          sunrise: 1, // sunrise time
          sunset: 3, // sunset time
        },
        weather: [{
          description: 'description',
          icon: 'icon',
          id: 1,
          main: 'Thunderstorm' // key to be tested
        }]
      };
    });

    it('should set a custom night theme if current date is bigger then sunset', () => {
      customMock = {
        ...customMock,
        dt: 4
      };

      httpMock.expectOne({
        url: `${environment.baseUrl}/weather?id=${props.city.id}`,
        method: 'GET'
      }).flush(customMock);

      expect(component.customTheme).toEqual(Themes.night.Thunderstorm);
    });

    it('should set a custom dfay theme if current date is bigger then sunrise and lower than sunset', () => {
      customMock = {
        ...customMock,
        dt: 2
      };

      httpMock.expectOne({
        url: `${environment.baseUrl}/weather?id=${props.city.id}`,
        method: 'GET'
      }).flush(customMock);

      expect(component.customTheme).toEqual(Themes.day.Thunderstorm);
    });

    it('should set with default theme if weather theme was not found', () => {
      customMock = {
        ...customMock,
        weather: [{
          description: 'description',
          icon: 'icon',
          id: 1,
          main: 'NOT-A-REAL-WEATHER' // key to be tested
        }]
      };

      httpMock.expectOne({
        url: `${environment.baseUrl}/weather?id=${props.city.id}`,
        method: 'GET'
      }).flush(customMock);

      expect(component.customTheme).toEqual(Themes.day.default);
    });
  });

  describe('Hourly weather', () => {
    beforeEach(() => {
      httpMock.expectOne({
      url: `${environment.baseUrl}/weather?id=${props.city.id}`,
          method: 'GET'
        }).flush(mockCityWeather);
    });

    it('should set hours on component first click', () => {
      const el = fixture.nativeElement.querySelector('.city-weather');
      el.click();
      const { lat, lon } = component.cityWeather.coord;

      httpMock.expectOne({
        url: `${environment.baseUrl}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts`,
        method: 'GET'
      }).flush(mockHours);

      const slicedMockHours = mockHours.hourly.slice(1, component.HOURLY_SIZE);
      expect(component.hours).toEqual(slicedMockHours);
    });

    it('should not load hours a seccond time', () => {
      const clickSpy = spyOn(component, 'handleClick').and.callThrough();
      const fetchSpy = spyOn(component, 'fetchHourlyWeather').and.callThrough();
      const el = fixture.nativeElement.querySelector('.city-weather');
      el.click();
      const { lat, lon } = component.cityWeather.coord;

      httpMock.expectOne({
        url: `${environment.baseUrl}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts`,
        method: 'GET'
      }).flush(mockHours);

      expect(clickSpy).toHaveBeenCalledTimes(1);
      expect(component.open).toBeTrue();
      expect(fetchSpy).toHaveBeenCalledTimes(1);

      el.click();

      expect(clickSpy).toHaveBeenCalledTimes(2);
      expect(component.open).toBeFalse();
      expect(fetchSpy).toHaveBeenCalledTimes(1);
    });
  });
});
