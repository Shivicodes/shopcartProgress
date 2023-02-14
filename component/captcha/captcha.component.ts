import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder,FormControl} from '@angular/forms'

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit{
  protected aFormGroup!: FormGroup;
  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
    
  
  this.aFormGroup =this.formBuilder.group({recaptcha:['',Validators.required]});
  }

}
