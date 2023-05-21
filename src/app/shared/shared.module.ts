import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterLink, RouterLinkWithHref} from "@angular/router";
import { HeaderCustomComponent } from './header-custom/header-custom.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    HeaderCustomComponent,
    SearchBarComponent
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    HeaderCustomComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterLink,
  ]
})
export class SharedModule { }
