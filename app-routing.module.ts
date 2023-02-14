import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { ElectronicsComponent } from './component/electronics/electronics.component';
import { FashionComponent } from './component/fashion/fashion.component';
import { MobileComponent } from './component/mobile/mobile.component';
import { OffersComponent } from './component/offers/offers.component';
import { OrdersumaryComponent } from './component/ordersumary/ordersumary.component';
import {SignUpComponent} from './component/sign-up/sign-up.component';
import { PaymentComponent } from './component/payment/payment.component';
import { CaptchaComponent } from './component/captcha/captcha.component';
import { UpipayComponent } from './component/upipay/upipay.component';
import { CashComponent } from './component/cash/cash.component';
import { CardComponent } from './component/card/card.component';
import { NetbankingComponent } from './component/netbanking/netbanking.component';
import { CoupenComponent } from './component/coupen/coupen.component';
import { ErrorComponent } from './component/error/error.component';


const routes:Routes=[{path:'',redirectTo:'products',pathMatch:'full'},
                      {path:'products',component:ProductsComponent},
                      {path:'cart',component:CartComponent},
                      { path: 'electronics', component: ElectronicsComponent },
                      {path:'fashion',component:FashionComponent},
                      {path:'mobile',component:MobileComponent},
                      {path:'offers',component:OffersComponent},
                      {path:'orderSumary',component: OrdersumaryComponent},
                      {path:'signup',component:SignUpComponent },
                      {path:'captcha',component:CaptchaComponent},
                      {path:'payment',component:PaymentComponent},
                      {path:'upipay',component:UpipayComponent},
                      {path:'cashpay',component:CashComponent},
                      {path:'cardpay',component:CardComponent},
                      {path:'netbanking',component:NetbankingComponent},
                      {path:'coupenpay',component:CoupenComponent},
                      {path:'error',component:ErrorComponent}
                      

                     ];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
