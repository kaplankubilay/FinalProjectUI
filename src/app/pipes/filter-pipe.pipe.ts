import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText? filterText.toLocaleLowerCase() : "";
    return filterText?                                                                      //filterText null değilse
    value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1)   //girilen ifade listede tek tek arar ve 
    :value;                                                                                 //başlangıç index i 0 olacağı için
  }                                                                                         //bulduğunda -1 den farklı bir index döndürecektir.

}

