import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products:Product[]=[];
  apiUrl:string="https://localhost:44381/api/products/getall";

  // productResponseModel:ProductResponseModel={
  //   data : this.products,
  //   message:"",
  //   success:true
  // };

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {    
    this.getProgucts();
  }

  getProgucts(){
    this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response)=>{
      this.products = response.data
    });
  }

}
