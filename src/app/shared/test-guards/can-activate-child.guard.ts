import { CanActivateChildFn } from '@angular/router';
import {question} from "./question";

export const canActivateChildGuard: CanActivateChildFn = (childRoute, state) => {
  return question('Вы хотите перейти по дочернему пути?');
};
