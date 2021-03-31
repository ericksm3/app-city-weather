import { Component, Input, OnInit } from '@angular/core';
import { City } from '@interfaces/city';
import { CityWeather } from '@interfaces/city-weather';

import { WeatherService } from '@services/weather.service';

import { faThermometerEmpty, faWind, faClock, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface DinoThemes {
  [name: string]: DinoTheme;
}

interface DinoTheme {
  /*'color-main': string;
  'color-main-darken': string;
  'color-main-darken2': string;
  'color-main-lighten': string;
  'color-accent': string;*/
}

@Component({
  selector: 'app-city-weather-report',
  templateUrl: './city-weather-report.component.html',
  styleUrls: ['./city-weather-report.component.scss']
})
export class CityWeatherReportComponent implements OnInit {
  
  @Input() city!: City;
  
  cityWeather!: CityWeather;

  faThermometerEmpty: IconDefinition = faThermometerEmpty
  faWind = faWind
  faClock: IconDefinition = faClock
  faBullseye = faBullseye

  readonly themes: any = { //DinoThemes
    'night' : {
      'Thunderstorm': {
        'primary': '',
      },
      'Drizzle': {
        'primary': '',
      },
      'Rain': {
        'primary': '',
      },
      'Snow': {
        'primary': '',
      },
      'Clear': {
        'secondary': '#090f29',
        'primary': '#121b3a',
        'tertiary': '#f6ab24'
      },
      'Clouds': {
        'primary': '',
      },
      'default': {
        'primary': '',
      }
    },
    'day' : {
      'Thunderstorm': {
        'primary': '',
      },
      'Drizzle': {
        'primary': '',
      },
      'Rain': {
        'primary': '',
      },
      'Snow': {
        'primary': '',
      },
      'Clear': {
        'secondary': '#090f29',
        'primary': '#121b3a',
        'tertiary': '#f6ab24'
      },
      'Clouds': {
        'primary': '',
      },
      'default': {
        'primary': '',
      }
    }
  };

  customTheme: any

  constructor(
    private weatherService: WeatherService
  ) {
    this.weatherService = weatherService;
  } 

  ngOnInit(): void {
    this.handleGetWeather();
  }

  async handleGetWeather(){
    this.weatherService.getCityWeather(this.city.id).subscribe(cityWeather => {
      console.log(cityWeather)
      this.cityWeather = cityWeather;
      
      const current = cityWeather.sys.sunrise > cityWeather.dt < cityWeather.sys.sunset ? 'night' : 'day';
      const theme = this.themes[current];
     
      const key = cityWeather.weather[0].main;
      this.customTheme = theme[key];
    });
  }

  getCustomTheme() {
    return { ...this.customTheme };
  }
}
