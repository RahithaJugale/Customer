import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/shared/customer';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(private router: Router, public customerService:CustomerService) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  //back button functionality
  gotoCustomer(){
    this.router.navigateByUrl('/customer');
  }

  getAllCustomers(){
    this.customerService.getAllCustomers().subscribe(
      (result) => {
        console.log(result);
        this.customerService.customers = result as Customer[];
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
