import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {ProductsComponent} from "./components/products/products.component";
import {TShirtsComponent} from "./components/products/t-shirts/t-shirts.component";
import {TShirtDeteilsComponent} from "./components/products/t-shirts/t-shirt-deteils/t-shirt-deteils.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'products', component: ProductsComponent},
  {path: 't-shirts', component: TShirtsComponent},
  {path: 't-shirts/t-shirts-details', component: TShirtDeteilsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
