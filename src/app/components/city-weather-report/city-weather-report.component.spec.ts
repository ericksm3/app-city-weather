import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherReportComponent } from './city-weather-report.component';

describe('CityWeatherReportComponent', () => {
  let component: CityWeatherReportComponent;
  let fixture: ComponentFixture<CityWeatherReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityWeatherReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
