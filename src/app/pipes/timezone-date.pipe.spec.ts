import { mockCityWeather } from '@common/mocks';
import { TimezoneDatePipe } from './timezone-date.pipe';

describe('TimezoneDatePipe', () => {
  it('should format time based on timezone', () => {
    const pipe = new TimezoneDatePipe();

    const date = pipe.transform(mockCityWeather.dt, mockCityWeather.timezone);
    expect(date).toBe('05:10 pm');
  });
});
