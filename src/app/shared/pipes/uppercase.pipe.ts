import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase2'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }

}
