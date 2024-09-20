import { Component } from '@angular/core';
import { BaseService } from '../base.service';

interface Food {
  ar: "String"
}

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css'
})
export class FoodsComponent {

  foods:any=[]
  public keresoSzo=""

  public minPrice = 0;
  public maxPrice = 0;

  slide_max = 0;

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