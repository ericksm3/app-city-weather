import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[weatherTheme]'
})
export class WeatherThemeDirective implements OnChanges {
  @Input('weatherTheme') theme!: {[prop: string]: string};

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
      this.el.nativeElement.style.setProperty(`--${prop}`, this.theme[prop]);
    });
  }
}
