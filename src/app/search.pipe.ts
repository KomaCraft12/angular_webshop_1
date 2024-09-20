import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(foods: any[], args: any[]): any {
    const keresoSzo = args[0];
    const maxPrice = args[1];
    const minPrice = args[2];
    return foods.filter(food => {
      const searchMatch = food.leiras.toLowerCase().includes(keresoSzo.toLowerCase());
      const priceMatch = food.ar >= minPrice && food.ar <= maxPrice;
      return priceMatch && searchMatch;
    })
  }

}
