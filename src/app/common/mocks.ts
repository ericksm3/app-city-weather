import { CityWeather, Hourly } from '@interfaces/index';

export const mockCityWeather: CityWeather = {
    weather: [{
        description: 'string',
        icon: 'string',
        id: 1,
        main: 'string'
    }],
    timezone: 7200,
    dt: 1617203456,
    sys: {
        country: 'string',
        id: 1,
        sunrise: 2,
        sunset: 3,
    },
    wind: {
        speed: 1,
        deg: 2
    },
    name: 'string',
    main: {
        feels_like: 1,
        humidity: 2,
        pressure: 3,
        temp: 4,
        temp_max: 5,
        temp_min: 6
    },
    coord: {
        lon: 1,
        lat: 2
    },
    temp: 20.51
};

export const mockHours: Hourly = {
    hourly: [
        mockCityWeather,
        mockCityWeather
    ],
    lat: 1,
    lon: 2,
    timezone: 'timezone',
    timezone_offset: 2000
};
