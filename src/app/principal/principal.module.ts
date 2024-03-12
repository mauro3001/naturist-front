import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { PrincipalRoutingModule } from './principal-routing.module';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { ModalProductComponent } from './components/modal-product/modal-product.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [InitialPageComponent, ModalProductComponent, LayoutComponent, NavbarComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule
  ],
})
export class PrincipalModule {}
