import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherIconComponent } from './weather-icon.component';

describe('WeatherIconComponent', () => {
  let component: WeatherIconComponent;
  let fixture: ComponentFixture<WeatherIconComponent>;

  const props = {
    icon: 'iconName',
    size: '2x'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherIconComponent);
    component = fixture.componentInstance;

    component.icon = props.icon;
    component.size = props.size;

    fixture.detectChanges();
  });

  it('should render a openweathermap image with icon and size params', () => {
    const image = fixture.nativeElement.querySelector('img');
    expect(image.src).toBe(`${component.apiUrl}/${component.icon}@${component.size}.png`);
  });
});
