import { Injectable } from '@angular/core';
import { City } from '@interfaces/city';

@Injectable({
  providedIn: 'root'
})

export class CityService {
    getCities(locale = 'EU'): Promise<City[]> {
        const mockEuropeanCities = [
            { id: 2643743, name: 'London' },
            { id: 2759794, name: 'Amsterdam' },
            { id: 2267057, name: 'Lisbon' },
            { id: 2673730, name: 'Stockholm' },
            { id: 3169070, name: 'Rome' },
            { id: 703448, name: 'Kyiv' }
        ];

        const mockBrazilianCities = [
            { id: 3405814, name: 'Belo Horizonte' },
            { id: 3451190, name: 'Rio de Janeiro' },
            { id: 3464975, name: 'Curitiba' },
            { id: 3663517, name: 'Manaus' },
            { id: 3390760, name: 'Recife' },
            { id: 3410315, name: 'Brasília' }
        ];

        const asianCities = [
            { id: 1850147, name: 'Tokyo' },
            { id: 1816670, name: 'Beijing' },
            { id: 524894, name: 'Moscow' },
            { id: 1261481, name: 'New Delhi' },
            { id: 128747, name: 'Karaj' },
            { id: 1701668, name: 'Manila' },
        ];

        let mockCities;

        switch (locale){
            case 'BR':
                mockCities = mockBrazilianCities;
                break;
            case 'AS':
                mockCities = asianCities;
                break;
            case 'EU':
            default:
                mockCities = mockEuropeanCities;
        }

        return Promise.resolve(mockCities);
    }
}
