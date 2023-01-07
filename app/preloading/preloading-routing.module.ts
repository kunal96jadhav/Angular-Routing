import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultcompComponent } from './defaultcomp/defaultcomp.component';
import { HomecompComponent } from './defaultcomp/homecomp/homecomp.component';
import { LogincompComponent } from './defaultcomp/logincomp/logincomp.component';
import { RegistercompComponent } from './defaultcomp/registercomp/registercomp.component';

const routes: Routes = [
  {path:'',component:DefaultcompComponent,
    children:[
      {path:"homecomp",component:HomecompComponent},
      {path:"logincomp",component:LogincompComponent},
      {path:"registercomp",component:RegistercompComponent}
    ]
  }
];

2

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreloadingRoutingModule { }
