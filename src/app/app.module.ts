import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';
import { PagesModule } from './pages/pages.module';
import { DefaultDataService } from './services/default-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { SpinnerInterceptor } from './shared/intercetors/spinner.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// @ts-ignore
@NgModule({
  declarations: [AppComponent, Page404Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    SharedModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [DefaultDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}

// { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
