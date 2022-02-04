import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {

  form = this.fb.group({
    _id: '',
    descricao: '',
    image: '',
    preco: '',
    tipo: '',
    quantidadeDisponivel: '',
    imagem: ''
  });

  addProduct = false;

  constructor(private productService: ProductService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.addProduct = id == 0;

    if (!this.addProduct) {
      this.productService.getById(id)
        .subscribe(product => {
          this.form.patchValue(product)
          console.log(product)
        })
    }
  }

  onSubmit() {
    if (this.addProduct) {
      this.productService.createProduct(this.form.getRawValue())
        .subscribe((res) => {
          console.log(res)
          this.router.navigate(["/produtos"])
        })
    } else {
      this.productService.updateProduct(this.form.getRawValue())
        .subscribe((res) => {
          this.router.navigate(["/produtos"])
          console.log(res)
        }
        )
    }

  }

  remove() {
    this.productService.deleteProduct(this.form.get("_id")?.value)
      .subscribe(res => {
        console.log(res)
        this.router.navigate(["/produtos"])
      })
  }

}
