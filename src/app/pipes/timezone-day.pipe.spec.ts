import { mockCityWeather } from '@common/mocks';
import { TimezoneDayPipe } from './timezone-day.pipe';

describe('TimezoneDayPipe', () => {
  it('should format date based on timezone', () => {
    const pipe = new TimezoneDayPipe();

    const date = pipe.transform(mockCityWeather.dt, mockCityWeather.timezone);
    expect(date).toBe('31/03/2021');
  });
});
