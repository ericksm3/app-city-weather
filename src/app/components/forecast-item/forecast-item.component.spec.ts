import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastItemComponent } from './forecast-item.component';

import { faWind } from '@fortawesome/free-solid-svg-icons';

describe('ForecastItemComponent', () => {
  let component: ForecastItemComponent;
  let fixture: ComponentFixture<ForecastItemComponent>;

  const props = {
    icon: faWind,
    label: 'test-label'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastItemComponent);
    component = fixture.componentInstance;

    component.icon = props.icon;
    component.label = props.label;

    fixture.detectChanges();
  });

  it('should render with a icon and a label', () => {
    const el = fixture.nativeElement;
    expect(el.querySelector('.forecast-item__icon')).toBeTruthy();
    expect(el.querySelector('.forecast-item__label').innerText).toBe(props.label);
  });
});
