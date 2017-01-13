import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home.component/home.component';
import { ProductsComponent } from './pages/products.component/products.component';
import { LoginComponent } from './pages/login.component/login.component';
import { ContactComponent } from './pages/contact.component/contact.component';
import { CreateComponent } from './pages/create.component/create.component';
import { SingleComponent } from './pages/single.component/single.component';


const appRoutes: Routes = [
 
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:cate:page', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'single', component: SingleComponent },  
  { path: 'single/:id', component: SingleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
