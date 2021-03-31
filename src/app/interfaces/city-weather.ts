import { Weather } from "./weather";
import { Temperature } from "./temperature";
import { Wind } from "./wind";

export interface CityWeather {
    name: string;
    weather: Weather[];
    main: Temperature;
    wind: Wind;

    //maybe useless \/

    base: string;
    clouds: {
        all: number;
    };
    cod: number;
    coord: {
        lon: number;
        lat: number;
    };
    dt: number;
    id: number;
    timezone: number;
    visibility: number;
    sys: any
}
