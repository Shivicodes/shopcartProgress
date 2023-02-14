import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerDatasetService {

  constructor(private httpClient: HttpClient) { }
  getCustomerDetail(){
    
    return this.httpClient.get("assets/DataStore/candidateStore.json");
    
    
  }
}




 



