import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/shared/customer';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  addCustomerForm:FormGroup;
  isSubmitted:boolean = false;

  constructor(private formBuilder: FormBuilder, private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {

    this.addCustomerForm = this.formBuilder.group(
      {
        //customerName 
        customerName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],

        // address
        address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],

        //isActive
        isActive: [false]
      }
    );
  }

  submitDetails():void{
    this.isSubmitted = true;
    console.log(this.addCustomerForm.value);

    if(this.addCustomerForm.invalid){
      return;
    }
    if(this.addCustomerForm.valid){
      this.customerService.addCustomer(this.addCustomerForm.value).subscribe(
        (result) => {
          console.log(result);
          alert("Customer Added");
          this.router.navigateByUrl('/customer');
        },
        (error) => {
          console.log(error);
        }
      );

    }

  }

  get formControls(){
    return this.addCustomerForm.controls;
  }

  gotoCustomer(){
    this.router.navigateByUrl('/customer');
  }
}
