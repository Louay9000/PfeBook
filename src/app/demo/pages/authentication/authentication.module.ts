import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/theme/shared/interceptor/auth.interceptor-interceptor';



@NgModule({
  declarations: [],
  imports: [CommonModule, AuthenticationRoutingModule],

  
})
export class AuthenticationModule {}
