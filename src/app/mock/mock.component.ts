import { Component, OnInit, Input } from '@angular/core';

import { City, CityWeather, Hourly, WeatherTheme, Theme } from '@interfaces/index';

import { WeatherService } from '@services/weather.service';

import { Themes } from '@common/theme';
import { TIME_DAY, TIME_NIGHT } from '@common/constants';
@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.scss']
})
export class MockComponent implements OnInit {

  cityWeather!: CityWeather;
  hours!: CityWeather[];
  customTheme!: WeatherTheme;
  open: boolean;

  readonly themes: Theme = Themes;
  readonly HOURLY_SIZE: number = 7;

  constructor(
    private weatherService: WeatherService
  ) {
    this.weatherService = weatherService;
    this.open = false;
  }

  ts = [
    ...Object.keys(Themes.day)
  ]
 
  ngOnInit(): void {
    this.handleGetWeather();
    console.log(this.ts)
  }

  setCustomTheme(cityWeather: CityWeather): void {
    const time =
      cityWeather.dt >= cityWeather.sys.sunrise
      && cityWeather.dt < cityWeather.sys.sunset
        ? TIME_DAY
        : TIME_NIGHT; // there are different icons for the same weather for day and night time

    const key = cityWeather.weather[0].main; // get current weather name
    this.customTheme = this.themes[time][key] || this.themes[time].default;
  }

  getIcon(t: any, time: any) {
    let icon
    if(time === 'night'){
      if(t === "Thunderstorm"){
        icon = '11d'
      }
      else if(t === 'Drizzle'){
        icon = '09d'
      }
      else if(t === 'Rain'){
        icon = '09d'
      }
      else if(t === 'Snow'){
        icon = '13d'
      }
      else if(t === 'Clear'){
        icon = '01n'
      }
      else if(t === 'Clouds'){
        icon='02n'
      }
      else if(t === 'default'){
        icon = '50d'
      }
    }
    else {
      if(t === "Thunderstorm"){
        icon = '11d'
      }
      else if(t === 'Drizzle'){
        icon = '09d'
      }
      else if(t === 'Rain'){
        icon = '10d'
      }
      else if(t === 'Snow'){
        icon = '13d'
      }
      else if(t === 'Clear'){
        icon = '01d'
      }
      else if(t === 'Clouds'){
        icon='02d'
      }
      else if(t === 'default'){
        icon = '50d'
      }
    }

    return icon
  }
  getCustomTheme(t:any): WeatherTheme {
    const cityWeather: any = {
      base: "stations",
      clouds: {all: 0},
      cod: 200,
      coord: {lon: 4.8897, lat: 52.374},
      dt: 1617293967,
      id: 2759794,
      main: {temp: 9.83, feels_like: 7.14, temp_min: 9.44, temp_max: 10.56, pressure: 1024},
      name: "Amsterdam",
      sys: {type: 1, id: 1524, country: "NL", sunrise: 1617254074, sunset: 1617300819},
      timezone: 7200,
      visibility: 10000,
      weather: [{
        description: "clear sky",
        icon: this.getIcon(t, 'night'),
        id: 800,
        main: 'some text'
      }],
      wind: {speed: 5.66, deg: 20}
    }
    this.cityWeather = cityWeather;
    this.setCustomTheme(cityWeather);

    const customTheme = Object.assign({}, this.themes['night'][t]);
    return customTheme;
  }

  handleGetWeather(): void {
    
   
  }

  fetchHourlyWeather(): void {
    if (!this.hours) {
      this.weatherService.getCityHourlyWeather(
        this.cityWeather.coord.lat,
        this.cityWeather.coord.lon
      ).subscribe((hours: Hourly) => {
        // limiting hours to the next HOURLY_SIZE hours and excluding the current one
        this.hours = hours.hourly.slice(1, this.HOURLY_SIZE + 1);
      });
    }

    // toggle hourly forecast
    this.open = !this.open;
  }
}
