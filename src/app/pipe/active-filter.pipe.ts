import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeFilter',
  pure: false
})
export class ActiveFilterPipe implements PipeTransform {

  transform(value: any[] | null): any[] | null {
    if(!value) {
      return value;
    }

    return value.filter( item => item.active === true);
}

}
