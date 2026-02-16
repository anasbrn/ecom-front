import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer-service';
import {Customer} from '../../models/Customer';
import {catchError, Observable, of} from 'rxjs';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class CustomerComponent implements OnInit {
  customersData$: Observable<Customer[]> | undefined;
  errorMessage = '';

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.loadCustomersData();
  }

  loadCustomersData() {
    this.customersData$ = this.customerService.getCustomers().pipe(
      catchError(err => {
        this.errorMessage = 'Error while fetching customer data';
        return of([]);
      })
    );
  }
}
