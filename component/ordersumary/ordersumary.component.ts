import { Component, OnInit } from '@angular/core';
import { CustomerDatasetService } from 'src/app/shared/customer-dataset.service';

@Component({
  selector: 'app-ordersumary',
  templateUrl: './ordersumary.component.html',
  styleUrls: ['./ordersumary.component.css']
})
export class OrdersumaryComponent {
  public customerData!: any[];
  public alreadyCustomer:any;
  public filledBox=false;
  public name:any;
    public email:any;
    public phone:any;
    public address:any;
    public sale:any;
  constructor(private customerDataService: CustomerDatasetService,
    

     ){         }
  ngOnInit():void{
    
    this.customerDataService.getCustomerDetail().subscribe((data)=>{
      // alert("the preexist candidate");
      console.log(data);
      //this.customerData=data['type'];
     
    
    
    });
 }
 public func1(arg:any){
  console.log("already a customer here");
  if(arg.length && this.filledBox){
  this.alreadyCustomer=true;
  this.filledBox=true;
  }


 }
 public func2(arg:any){
  if(arguments.length){
  console.log("new customer....");
  this.alreadyCustomer=false;
  this.filledBox=true;
  }

 }
}

 
