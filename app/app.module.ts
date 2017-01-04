import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders }  from './app.routing';

import { AppComponent }  from './app.component';
import { HomeComponent } from './pages/home.component/home.component';
import { ProductsComponent } from './pages/products.component/products.component';
import { SingleComponent } from './pages/single.component/single.component';
import { ContactComponent } from './pages/contact.component/contact.component';
import { LoginComponent } from './pages/login.component/login.component';
import { CreateComponent } from './pages/create.component/create.component';

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
import { ModReviewTabsComponent } from './modules/mod_review_tabs.component/mod_review_tabs.component';
import { ModRelatedProductsComponent } from './modules/mod_related_products.component/mod_related_products.component';
import { ModContactComponent } from './modules/mod_contact.component/mod_contact.component';
import { ModLoginComponent } from './modules/mod_login.component/mod_login.component';
import { ModCreateComponent } from './modules/mod_create.component/mod_create.component';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, HomeComponent, WidFooterComponent, WidHeaderComponent, ModMenuComponent,
                  ModBannerComponent, ModOnlineStripComponent, ModLatestProductsComponent, ModSaleProductsComponent,
                  ProductsComponent, ModProductsComponent, ModSidebarComponent, SingleComponent,
                  ModProductDetailComponent, ModReviewTabsComponent, ModRelatedProductsComponent, ContactComponent,
                  ModContactComponent, LoginComponent, ModLoginComponent, CreateComponent, ModCreateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
