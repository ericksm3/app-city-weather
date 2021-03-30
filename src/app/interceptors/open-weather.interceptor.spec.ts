import { TestBed } from '@angular/core/testing';

import { OpenWeatherInterceptor } from './open-weather.interceptor';

describe('OpenWeatherInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      OpenWeatherInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: OpenWeatherInterceptor = TestBed.inject(OpenWeatherInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
