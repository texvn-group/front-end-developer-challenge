import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produtos } from '../models/Produtos';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  products: Produtos[] = new Array<Produtos>();

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(products => {
      this.products = products;
      console.log(products)
    })
  }

  redirect(id: String){
    this.router.navigate([`produtos/${id}`])
  }
}
