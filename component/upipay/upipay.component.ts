import { Component } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown/multiselect.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upipay',
  templateUrl: './upipay.component.html',
  styleUrls: ['./upipay.component.css']
})
export class UpipayComponent {
  paymodeList = [{}];
  paybuttonEnable=false;
  enableScanner=false;
  selectedpaymode=[{}];
  paymodedropDownForm!: FormGroup;
  dropdownSettings:IDropdownSettings={};
 
  constructor(private fb: FormBuilder,private router:Router) {}
 
  ngOnInit() {
    this.paymodeList = [
      { item_id: 1, item_text: 'PhonePe' },
      { item_id: 2, item_text: 'Google Pay' },
      { item_id: 3, item_text: 'Enter UPI ID' },
     
    ];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
    };
    this.selectedpaymode = [
      { item_id: 3, item_text: 'Item3'  }
      
    ];
    this.paymodedropDownForm= this.fb.group({
      myItems: [this.selectedpaymode]
  });
  }
  public onItemSelect(item: any) {
    this.paybuttonEnable=true;
    this.scanAndPay();
    console.log('onItemSelect', item);
  }
  public onItemDeSelect(item: any) {
    console.log('onItemDeSelect', item);
  }
  public scanAndPay(){
    this.enableScanner=true;


  }
  
 

}



