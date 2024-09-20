import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(foods: any[], minPrice: any, maxPrice: any): any {
    if (!foods) return null;
    if (!minPrice || !maxPrice) return foods;
    
    return foods.filter(food => {
      const price = parseFloat(food.ar);
      return price >= minPrice && price <= maxPrice;
    });
  }

}
