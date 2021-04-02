import { Component, Input, OnInit } from '@angular/core';

import { City, CityWeather, Hourly, WeatherTheme, Theme } from '@interfaces/index';

import { WeatherService } from '@services/weather.service';

import { Themes } from '@common/theme';
import { TIME_DAY, TIME_NIGHT } from '@common/constants';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit {

  @Input() city!: City;

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

  ngOnInit(): void {
    this.handleGetWeather();
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

  getCustomTheme(): WeatherTheme {
    const customTheme = Object.assign({}, this.customTheme);
    return customTheme;
  }

  handleGetWeather(): void {
    this.weatherService.getCityWeather(this.city.id).subscribe((cityWeather: CityWeather) => {
      this.cityWeather = cityWeather;
      // setting color theme for weather cards
      this.setCustomTheme(cityWeather);
    });
  }

  handleClick(): void{
    if (!this.hours) {
      this.fetchHourlyWeather();
    }
    // toggle hourly forecast
    this.open = !this.open;
  }

  fetchHourlyWeather(): void {
    this.weatherService.getCityHourlyWeather(
      this.cityWeather.coord.lat,
      this.cityWeather.coord.lon
    ).subscribe((hours: Hourly) => {
      // limiting hours to the next HOURLY_SIZE hours and excluding the current one
      this.hours = hours.hourly.slice(1, this.HOURLY_SIZE + 1);
    });
  }
}
