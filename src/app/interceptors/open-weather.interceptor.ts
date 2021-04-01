import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { OPEN_WEATHER_API_KEY, UNITS, UNIT_TYPE } from '@common/constants';

@Injectable()
export class OpenWeatherInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      params: request.params.set(OPEN_WEATHER_API_KEY, environment.apiKey)
    });
    request = request.clone({
      params: request.params.set(UNITS, UNIT_TYPE)
    });

    return next.handle(request);
  }
}
