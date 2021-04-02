import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockCityWeather } from '@common/mocks';
import { CelsiusPipe } from '@pipes/celsius.pipe';
import { TimezoneDatePipe } from '@pipes/timezone-date.pipe';
import { TimezoneDayPipe } from '@pipes/timezone-day.pipe';

import { ForecastDetailsComponent } from './forecast-details.component';

describe('ForecastDetailsComponent', () => {
  let component: ForecastDetailsComponent;
  let fixture: ComponentFixture<ForecastDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ForecastDetailsComponent,
        TimezoneDayPipe,
        TimezoneDatePipe,
        CelsiusPipe
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastDetailsComponent);
    component = fixture.componentInstance;
    component.cityWeather = mockCityWeather;

    fixture.detectChanges();
  });

  it('should render with four forecast items', () => {
    const items = fixture.nativeElement.querySelectorAll('app-forecast-item');
    expect(items.length).toBe(4);
  });

  it('should set four icons', () => {
    expect(component.faThermometerEmpty).toBeDefined();
    expect(component.faWind).toBeDefined();
    expect(component.faClock).toBeDefined();
    expect(component.faCalendarAlt).toBeDefined();
  });
});
