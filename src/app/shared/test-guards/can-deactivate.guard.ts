import { CanDeactivateFn } from '@angular/router';
import {question} from "./question";

export const canDeactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return question('Вы хотите покинуть данный путь?');
};
