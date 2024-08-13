import { CanActivateFn } from '@angular/router';
import {question} from "./question";

export const questionCanActivateGuard: CanActivateFn = (route, state) => {
  return question('Вы хотите перейти по данному пути?');
};
