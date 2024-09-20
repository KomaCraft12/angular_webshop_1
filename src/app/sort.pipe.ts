import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], sortBy: string): any[] {
    if (!value) return [];
    if (!sortBy) return value;

    return value.sort((a, b) => {
      if (sortBy === 'price-asc') {
        return a.ar - b.ar;
      } else if (sortBy === 'price-desc') {
        return b.ar - a.ar;
      }
      return 0;
    });
  }

}
