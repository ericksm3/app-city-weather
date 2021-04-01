import { CityWeather } from '.';

export interface Hourly {
    hourly: CityWeather[];
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
}
