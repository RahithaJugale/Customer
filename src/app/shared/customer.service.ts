import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Customer[];

  constructor(private httpClient:HttpClient) { }

  //add customer method 
  addCustomer(newCustomer: Customer){
    return this.httpClient.post(environment.apiUrlCustomerAndSales+'/api/customers', newCustomer);
  }

  //list all customers
  getAllCustomers(){
    return this.httpClient.get(environment.apiUrlCustomerAndSales + '/api/customers');
  }
}
