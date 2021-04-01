import { WeatherTheme } from '@interfaces/weather-theme';

export interface Theme {
    'night': {
      [name: string]: WeatherTheme
    };
    'day': {
      [name: string]: WeatherTheme
    };
  }
