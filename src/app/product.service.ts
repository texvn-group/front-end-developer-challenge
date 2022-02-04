import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from './models/Produtos';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  url = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`${this.url}/produtos`)
  }

  getById(id: String): Observable<Produtos>{
    return this.http.get<Produtos>(`${this.url}/produtos/${id}`)
  }

  createProduct(product: Produtos){
    return this.http.post(`${this.url}/produtos`, product)
  }

  updateProduct(product: Produtos){
    return this.http.put(`${this.url}/produtos/${product._id}`, product)
  }

  deleteProduct(id: String){
    return this.http.delete(`${this.url}/produtos/${id}`)
  }
}
