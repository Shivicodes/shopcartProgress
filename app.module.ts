import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
//OrdersumaryComponent
import { OrdersumaryComponent } from './component/ordersumary/ordersumary.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { ElectronicsComponent } from './component/electronics/electronics.component';
import { OffersComponent } from './component/offers/offers.component';
import { FashionComponent } from './component/fashion/fashion.component';
import { MobileComponent } from './component/mobile/mobile.component';

import { SignUpComponent } from './component/sign-up/sign-up.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentDropdownComponent } from './component/payment-dropdown/payment-dropdown.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { UpipayComponent } from './component/upipay/upipay.component';
import { CashComponent } from './component/cash/cash.component';
import { CaptchaComponent } from './component/captcha/captcha.component';
import {ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './component/card/card.component';
import { NetbankingComponent } from './component/netbanking/netbanking.component';
import { CoupenComponent } from './component/coupen/coupen.component';
import { ErrorComponent } from './component/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    ElectronicsComponent,PaymentDropdownComponent,
    OffersComponent,
    FashionComponent,
    MobileComponent,
    OrdersumaryComponent,
    SignUpComponent,
    PaymentComponent,
    UpipayComponent,
    CashComponent,
    CaptchaComponent,
    CardComponent,
    NetbankingComponent,
    CoupenComponent,
    ErrorComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
