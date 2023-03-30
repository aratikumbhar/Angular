import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { TodoComponent } from './todo/todo.component';
import { UnsavedchangesGuard } from './unsavedchanges.guard';
import { UserdetailsComponent } from './userdetails/userdetails.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'}, // http:localhost:4200 
  { path: 'home', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent }, // http://localhost:4200/aboutus
  { path: 'contactus', component: ContactusComponent },
  { path:  'product', canActivate:[AuthGuard], component: ProductComponent,
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
  { path: 'login', component: LoginformComponent},
  { path: 'order', component: OrderListComponent},
  // { path: 'customer', loadChildren:'./customer/customer.module#CustomerModule'},
  // { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  { path: 'todo', component: TodoComponent},
  { path: 'adduser', component: AdduserComponent, canDeactivate: [UnsavedchangesGuard]},
  { path:  '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
