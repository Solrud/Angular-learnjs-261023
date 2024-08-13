import {CanActivateFn, Router} from '@angular/router';
import {question} from "./question";
import {inject} from "@angular/core";

export const redirectGuard: CanActivateFn = (route, state) => {
  return question('Хотите перейти или вас перебросить нафиг?)') || inject(Router).createUrlTree(['/products-list']);
};
