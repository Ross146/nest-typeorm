import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AuthModule,
} from 'projects/auth/src/public-api';
import { MasterComponent } from './shared/master/master.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppCommonModule } from 'projects/app-common/src/public-api';
import {LoggerService} from "./services/logger.service";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AuthModule,
    AppCommonModule
  ],
  declarations: [AppComponent, MasterComponent],
  // providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
