import { Injectable } from '@angular/core';
import { City } from '@interfaces/city';

@Injectable({
  providedIn: 'root'
})

export class CityService {
    getCities() : Promise<Array<City>> {
        const mockCities = [
            { id: 2643743, name: 'london' },
            { id: 2759794, name: 'amsterdam' },
            { id: 2950158, name: 'berlin' },
            { id: 2968815, name: 'paris' },
            { id: 2673730, name: 'stockholm' },
            { id: 1850147, name: 'tokyo' },
            { id: 6255012, name: 'flinders'},
            { id: 7910072, name: 'new zealand' }
        ];

        return Promise.resolve(mockCities)
    }
}