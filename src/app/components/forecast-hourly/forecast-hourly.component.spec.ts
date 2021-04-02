import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockHours } from '@common/mocks';
import { CelsiusPipe } from '@pipes/celsius.pipe';
import { TimezoneDatePipe } from '@pipes/timezone-date.pipe';

import { ForecastHourlyComponent } from './forecast-hourly.component';

describe('ForecastHourlyComponent', () => {
  let component: ForecastHourlyComponent;
  let fixture: ComponentFixture<ForecastHourlyComponent>;

  const datePipe = new TimezoneDatePipe();
  const temperaturePipe = new CelsiusPipe();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ForecastHourlyComponent,
        TimezoneDatePipe,
        CelsiusPipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastHourlyComponent);
    component = fixture.componentInstance;

    component.hours = mockHours.hourly;
    component.timezone = mockHours.timezone_offset;

    fixture.detectChanges();
  });

  it('should render hours length number of items', () => {
    const items = fixture.nativeElement.querySelectorAll('.forecast-hourly__item');
    expect(items.length).toBe(component.hours.length);
  });

  it('should render items with formated date', () => {
    component.hours.forEach((item) => {
      const date = datePipe.transform(item.dt, component.timezone);
      expect(fixture.nativeElement.querySelector('.forecast-hourly__item').innerText).toContain(date);
    });
  });

  it('should render items with formated temperature', () => {
    component.hours.forEach((item) => {
      const temperature = temperaturePipe.transform(item.temp);
      expect(fixture.nativeElement.querySelector('.forecast-hourly__item').innerText).toContain(temperature);
    });
  });
});
