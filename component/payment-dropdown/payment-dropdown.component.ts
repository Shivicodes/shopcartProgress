import { Component } from '@angular/core';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-dropdown',
  templateUrl: './payment-dropdown.component.html',
  styleUrls: ['./payment-dropdown.component.css']
})
export class PaymentDropdownComponent {
  dropdownList = [{}];
  selectedItem=[{}];
  dropDownForm!: FormGroup;
  dropdownSettings:IDropdownSettings={};
  constructor(private fb: FormBuilder,private router:Router) {}
  ngOnInit() {
    // <li>Paytm/PhonePay/BHEM</li>
    //         <li>Pay on delivery</li>
    //         <li>Credit Card / debit card</li>
    //         <li> net banking</li>
    //         <li>gift coupen</li>
    this.dropdownList = [
      { item_id: 1, item_text: 'Cash On Delivery' },
      { item_id: 2, item_text: 'Paytm/PhonePay/BHEM' },
      { item_id: 3, item_text: 'Credit Card / debit card' },
      { item_id: 4, item_text: 'Net banking' },
      { item_id: 5, item_text: 'Bank Account Access' },
      { item_id: 6, item_text: 'Gift Coupen' }
    ];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
    };
    this.selectedItem = [
      { item_id: 3, item_text: 'Item3'  }
      
    ];
    this.dropDownForm = this.fb.group({
      myItems: [this.selectedItem]
  });
  }
   onItemSelect(item: any) {
    console.log('onItemSelect', item);
    if(item.item_id==2){
      this.router.navigate(['/upipay']);

    }
    else if(item.item_id==2){
      this.router.navigate(['/cashpay']);
    }
    else if(item.item_id==3){
      this.router.navigate(['/cardpay']);
    }
    else if(item.item_id==4){
      this.router.navigate(['/netbanking']);

    }
    else if(item.item_id==5){
      this.router.navigate(['/coupen']);

    }
    else{
      this.router.navigate(['/error']);
    }
    

  }
  public onItemDeSelect(item: any) {
    console.log('onItemDeSelect', item);
  }

}
