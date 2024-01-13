import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import { MycartComponent } from './mycart/mycart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CouponsComponent } from './coupons/coupons.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CompareComponent } from './compare/compare.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"", redirectTo:"home", pathMatch:'full'},
  {path:"products", component:ProductsComponent},
  {path:"registeration", component:RegisterationComponent},
  {path:"login", component:LoginComponent},
  {path:"wishlist", component:WishlistComponent},
  {path:"mycart", component:MycartComponent},
  {path:"coupons", component:CouponsComponent},
  {path:"categories", component:CategoriesComponent},
  {path:"brands", component:BrandsComponent},
  {path:"blogs", component:BlogsComponent},
  {path:"compare", component:CompareComponent},
  {path:"**", component:NotfoundpageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
