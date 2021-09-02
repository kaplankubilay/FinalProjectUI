import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products:Product[]=[];

  dataLoaded=false;
  filterText="";
  
  constructor(private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService) { }

  ngOnInit(): void {    
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductByCategoryId(params["categoryId"])
      }
      else{
        this.getProgucts()
      }
    });    
  }


  getProgucts(){
    this.productService.getProgucts().subscribe(response=>{      
      this.products=response.data;      
      this.dataLoaded=true;
    });
  }

  getProductByCategoryId(categoryId:number){
    this.productService.getProductsByCategoryId(categoryId).subscribe(response=>{
      this.products=response.data;
      this.dataLoaded=true;
    });
  }

  addToCard(product:Product){
    this.cartService.addToCartMetod(product);
    this.toastrService.success("Sepete Eklendi.",product.productName);
  }



}
