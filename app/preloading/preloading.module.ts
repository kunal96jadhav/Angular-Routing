import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadingRoutingModule } from './preloading-routing.module';
import { DefaultcompComponent } from './defaultcomp/defaultcomp.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HomecompComponent } from './defaultcomp/homecomp/homecomp.component';
import { LogincompComponent } from './defaultcomp/logincomp/logincomp.component';
import { RegistercompComponent } from './defaultcomp/registercomp/registercomp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DefaultcompComponent,
    HomecompComponent,
    LogincompComponent,
    RegistercompComponent
  ],
  imports: [
    CommonModule,
    PreloadingRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    DefaultcompComponent,
    HomecompComponent,
    LogincompComponent,
    RegistercompComponent

  ]
})
export class PreloadingModule { }
