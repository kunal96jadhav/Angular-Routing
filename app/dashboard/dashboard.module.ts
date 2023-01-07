import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { HeaderComponent } from './header/header.component';
import { RoleComponent } from './role/role.component';
import { MenuComponent } from './menu/menu.component';
import { AllcomponantsModule } from './allcomponants/allcomponants.module';
import { AllcomponantsRoutingModule } from './allcomponants/allcomponants-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    RoleComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,AllcomponantsModule,AllcomponantsRoutingModule
  ],
  exports:[
    HeaderComponent,
    RoleComponent,
    MenuComponent
  ]
})
export class DashboardModule { }
