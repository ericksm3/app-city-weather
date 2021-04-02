import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { WeatherReportComponent } from './weather-report.component';

describe('WeatherReportComponent', () => {
  let component: WeatherReportComponent;
  let fixture: ComponentFixture<WeatherReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render a select with city region choises', () => {
    const select = fixture.nativeElement.querySelector('select');
    expect(select.options.length).toBe(component.options.length);
  });

  it('should call setLocation and handleGetCitiesWeathers on select change', () => {
    const locationSpy = spyOn(component, 'setLocation').and.callThrough();
    const citiesFetchSpy = spyOn(component, 'handleGetCitiesWeathers').and.callThrough();

    const select = fixture.nativeElement.querySelector('select');
    select.dispatchEvent(new Event('change'));

    expect(locationSpy).toHaveBeenCalled();
    expect(component.location).toBe(component.options[0].value);
    expect(citiesFetchSpy).toHaveBeenCalled();
  });

  it('should fetch cities on load', fakeAsync(() => {
    expect(component.cities.length).toBe(0);
    const spy = spyOn(component, 'handleGetCitiesWeathers').and.callThrough();

    component.ngOnInit();
    tick();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(component.cities.length).toBeGreaterThan(0);
  }));
});
