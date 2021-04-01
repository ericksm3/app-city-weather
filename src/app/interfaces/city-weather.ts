import { Weather } from './weather';
import { Temperature } from './temperature';
import { Wind } from './wind';
import { Sys } from './sys';

export interface CityWeather {
    weather: Weather[];
    timezone: number;
    dt: number;
    sys: Sys;
    wind: Wind;
    name: string;
    main: Temperature;
    coord: {
        lon: number;
        lat: number;
    };
}
