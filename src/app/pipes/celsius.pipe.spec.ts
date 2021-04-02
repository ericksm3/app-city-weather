/* tslint:disable prefer-const */
import { CelsiusPipe } from './celsius.pipe';
import { mockCityWeather } from '@common/mocks';

describe('CelsiusPipe', () => {
  it('should round temperature and add °C text', () => {
    const pipe = new CelsiusPipe();
    expect(pipe.transform(mockCityWeather.temp)).toBe('21 °C');
  });

  it('should return undefined if value is undefined', () => {
    const pipe = new CelsiusPipe();
    let undefinedVar;
    expect(pipe.transform(undefinedVar)).toBeUndefined();
  });
});
