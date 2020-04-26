import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({
  declarations: [MainLayoutComponent, TopBarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule
  ],
  exports: [MainLayoutComponent]
})
export class LayoutModule { }
