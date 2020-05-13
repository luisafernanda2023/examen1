import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPersona'
})
export class FiltroPersonaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
