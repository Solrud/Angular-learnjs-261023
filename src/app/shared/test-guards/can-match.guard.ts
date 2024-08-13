import { CanMatchFn } from '@angular/router';
import {question} from "./question";

export const canMatchGuard: CanMatchFn = (route, segments) => {
  return question('Это тот конфиг который нужен?');
};
