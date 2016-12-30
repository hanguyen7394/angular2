import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './pages/home.component';
import { WidHeaderComponent } from './widgets/wid_header.component/wid_header.component';
import { WidFooterComponent } from './widgets/wid_footer.component/wid_footer.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HomeComponent, WidFooterComponent, WidHeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
