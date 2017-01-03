import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './pages/home.component/home.component';
import { ProductsComponent } from './pages/products.component/products.component';
import { SingleComponent } from './pages/single.component/single.component';

import { WidHeaderComponent } from './widgets/wid_header.component/wid_header.component';
import { WidFooterComponent } from './widgets/wid_footer.component/wid_footer.component';

import { ModMenuComponent } from './modules/mod_menu.component/mod_menu.component';
import { ModBannerComponent } from './modules/mod_banner.component/mod_banner.component';
import { ModOnlineStripComponent } from './modules/mod_online_strip.component/mod_online_strip.component';
import { ModLatestProductsComponent } from './modules/mod_latest_products.component/mod_latest_products.component';
import { ModSaleProductsComponent } from './modules/mod_sale_products.component/mod_sale_products.component';
import { ModProductsComponent } from './modules/mod_products.component/mod_products.component';
import { ModSidebarComponent } from './modules/mod_sidebar.component/mod_sidebar.component';
import { ModProductDetailComponent } from './modules/mod_product_detail.component/mod_product_detail.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HomeComponent, WidFooterComponent, WidHeaderComponent, ModMenuComponent,
                  ModBannerComponent, ModOnlineStripComponent, ModLatestProductsComponent, ModSaleProductsComponent,
                  ProductsComponent, ModProductsComponent, ModSidebarComponent, SingleComponent, ModProductDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
