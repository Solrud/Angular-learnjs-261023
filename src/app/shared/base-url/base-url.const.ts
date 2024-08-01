import {InjectionToken} from '@angular/core';

export const baseUrl: string = 'https://course-angular.javascript.ru/api';

export const BASE_URL = new InjectionToken('base url', {
    providedIn: 'root',
    factory: () => baseUrl,
});
