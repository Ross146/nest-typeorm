import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
  log = (msg: string) => {
    console.log(msg);
  };
}


export const LoggerService = {
  provide: Logger,
  useClass: Logger,
  multi: true
};