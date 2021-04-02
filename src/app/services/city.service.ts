import { Injectable } from '@angular/core';
import { City } from '@interfaces/city';

@Injectable({
  providedIn: 'root'
})

export class CityService {
    mockEuropeanCities = [
        { id: 2643743, name: 'London' },
        { id: 2759794, name: 'Amsterdam' },
        { id: 2267057, name: 'Lisbon' },
        { id: 2673730, name: 'Stockholm' },
        { id: 3169070, name: 'Rome' },
        { id: 703448, name: 'Kyiv' }
    ];

    mockBrazilianCities = [
        { id: 3405814, name: 'Belo Horizonte' },
        { id: 3451190, name: 'Rio de Janeiro' },
        { id: 3464975, name: 'Curitiba' },
        { id: 3663517, name: 'Manaus' },
        { id: 3390760, name: 'Recife' },
        { id: 3410315, name: 'Brasília' }
    ];

    mockAsianCities = [
        { id: 1850147, name: 'Tokyo' },
        { id: 1816670, name: 'Beijing' },
        { id: 524894, name: 'Moscow' },
        { id: 1261481, name: 'New Delhi' },
        { id: 128747, name: 'Karaj' },
        { id: 1701668, name: 'Manila' },
    ];

    getCities(locale = 'EU'): Promise<City[]> {
        let mockCities;

        switch (locale){
            case 'BR':
                mockCities = this.mockBrazilianCities;
                break;
            case 'AS':
                mockCities = this.mockAsianCities;
                break;
            case 'EU':
            default:
                mockCities = this.mockEuropeanCities;
        }

        return Promise.resolve(mockCities);
    }
}
