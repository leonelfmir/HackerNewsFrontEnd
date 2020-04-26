import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutRoutingModule } from './layout-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { TopBarComponent } from './top-bar/top-bar.component';




@NgModule({
  declarations: [MainLayoutComponent, TopBarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    
  ],
  exports: [MainLayoutComponent]
})
export class LayoutModule { }
