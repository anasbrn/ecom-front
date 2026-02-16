import {Component, OnInit} from '@angular/core';
import {catchError, Observable, of} from 'rxjs';
import {CustomerService} from '../../services/customer-service';
import {ProductService} from '../../services/product-service';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit{
  productsData$: Observable<Product[]> | undefined;
  errorMessage = '';

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.loadProductsData();
  }

  loadProductsData() {
    this.productsData$ = this.productService.getProducts().pipe(
      catchError(err => {
        this.errorMessage = 'Error while fetching products data';
        return of([]);
      })
    );
  }

}
