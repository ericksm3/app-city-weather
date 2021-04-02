import { CityService } from './city.service';

describe('CityService', () => {
    let service: CityService;

    beforeEach(() => {
        service = new CityService();
    });

    it('should get cities from europe by default', (done) => {
        service.getCities().then(response => {
            expect(response).toEqual(service.mockEuropeanCities);
            done();
        });
    });

    it('should allow to get cities from europe', (done) => {
        service.getCities('EU').then(response => {
            expect(response).toEqual(service.mockEuropeanCities);
            done();
        });
    });

    it('should allow to get cities from asia', (done) => {
        service.getCities('AS').then(response => {
            expect(response).toEqual(service.mockAsianCities);
            done();
        });
    });

    it('should allow to get cities from brazil', (done) => {
        service.getCities('BR').then(response => {
            expect(response).toEqual(service.mockBrazilianCities);
            done();
        });
    });
});
