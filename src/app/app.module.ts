import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PcompComponent } from './Componnets/pcomp/pcomp.component';
import { CcompComponent } from './Componnets/ccomp/ccomp.component';
import { TempComponent } from './Componnets/temp/temp.component';
import {HttpClientModule} from '@angular/common/http';
import { ReduxComponent } from './Componnets/redux/redux.component'
import {StoreModule} from '@ngrx/store'
import {reducer} from './Componnets/redux/redux.reducer'


@NgModule({
  declarations: [
    AppComponent,
    PcompComponent,
    CcompComponent,
    TempComponent,
    ReduxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
