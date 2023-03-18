import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { HomeComponent } from './home/home.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'}, // http:localhost:4200 
  { path: 'home', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent }, // http://localhost:4200/aboutus
  { path: 'contactus', component: ContactusComponent },
  { path:  'product', component: ProductComponent,
    children: [
      { path: 'laptop', component: LaptopComponent},
      { path: 'mobile', component: MobileComponent},
      { path: 'camera', component: CameraComponent},
      { path: 'watch', component: WatchComponent}
    ]
  },
  { path: 'post', component: DemopostComponent},
  { path: 'postdetails/:id', component: DemopostdetailsComponent},
  { path: 'userdetails', component: UserdetailsComponent},
  { path: 'login', component: TemplateformComponent},
  { path: 'order', component: OrderListComponent},
  { path:  '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
