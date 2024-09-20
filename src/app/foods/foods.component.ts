import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { SortPipe } from '../sort.pipe';

interface Food {
  ar: "String"
}

interface SortOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css',
})
export class FoodsComponent {

  foods:any=[]
  public keresoSzo=""

  minPrice = 0;
  maxPrice = 0;
  slide_max = 0;
  sortBy = "";

  sortOptions: SortOption[] = [
    { label: 'Increasing price', value: 'price-asc' },
    { label: 'Decreasing price', value: 'price-desc' },
  ];

  sortData(sortOption: string) {
    this.sortBy = sortOption;
    const sortPipe = new SortPipe();
    this.foods = sortPipe.transform(this.foods, sortOption);
  }

  constructor(private base:BaseService) {
    this.base.getFoods().subscribe((data:any)=>{
      this.foods=data;
      this.maxPrice = Math.max(...data.map((food: Food) => {
        const price = parseInt(food.ar);
        return isNaN(price) ? 0 : price;
      }));
      this.slide_max = Math.max(...data.map((food: Food) => {
        const price = parseInt(food.ar);
        return isNaN(price) ? 0 : price;
      }));
      console.log(this.maxPrice)
    });
  }

  public setSearch(szo:string){
    this.keresoSzo=szo;
  }

  resetAllFilter(e:any){
    e.preventDefault();
    this.minPrice = 0;
    this.maxPrice = this.slide_max;
  }

}