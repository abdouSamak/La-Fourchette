import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgZorroAntdModule, NzLayoutModule} from "ng-zorro-antd";
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { MenuComponent } from './component/menu/menu.component';
import {InformationsComponent} from "./component/informations/informations.component";
import {FirstComponent} from "./component/first/first.component";
import {ReservationComponent} from "./component/reservation/reservation.component";
import {AcceuilComponent} from "./component/acceuil/acceuil.component";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    InformationsComponent,
    MenuComponent,
    ReservationComponent,
    FirstComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
