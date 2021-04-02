import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { WeatherTheme } from '@interfaces/weather-theme';

@Directive({
  selector: '[weatherTheme]'
})
export class WeatherThemeDirective implements OnChanges {
  @Input('weatherTheme') theme!: WeatherTheme;

  constructor(private el: ElementRef<HTMLElement>) {
  }

  ngOnChanges(): void {
    /*
    writing variable on DOM element to be used as theme

    interface WeatherTheme
    --primary
    --secondary
    --tertiary
    */
    Object.keys(this.theme).forEach(prop => {
      enum WeatherThemeEnum {
        primary = 'primary',
        secondary = 'secondary',
        tertiary = 'tertiary'
      }
      this.el.nativeElement.style.setProperty(`--${prop}`, this.theme[prop as WeatherThemeEnum]);
    });
  }
}
