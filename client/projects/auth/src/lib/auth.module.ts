import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AppCommonModule } from 'projects/app-common/src/public-api';
import {jwtInterceptorProvider} from "./services/jwt-interceptor";
import {errorInterceptorProvider} from "./services/error-interceptor";

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    AppCommonModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [jwtInterceptorProvider, errorInterceptorProvider],
})
export class AuthModule { }
