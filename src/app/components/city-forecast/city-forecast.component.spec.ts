import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityForecastComponent } from './city-forecast.component';

describe('CityForecastComponent', () => {
  let component: CityForecastComponent;
  let fixture: ComponentFixture<CityForecastComponent>;

  const props = {
    weather: {
      icon: 'icon',
      main: 'main',
      description: 'Description'
    },
    country: 'country',
    name: 'name',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityForecastComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityForecastComponent);
    component = fixture.componentInstance;

    component.weather = props.weather;
    component.name = props.name;
    component.country = props.country;

    fixture.detectChanges();
  });

  it('should render with required properties', () => {
    const el = fixture.nativeElement;
    expect(el.querySelector('.city-forecast__name').innerText).toBe(`${props.name}/${props.country}`);
    expect(el.querySelector('.city-forecast__main').innerText).toBe(props.weather.main);
    expect(el.querySelector('.city-forecast__description').innerText).toBe(props.weather.description);
    expect(el.querySelector('app-weather-icon')).toBeTruthy();
  });
});
