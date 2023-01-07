import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultcompComponent } from './preloading/defaultcomp/defaultcomp.component';





const routes: Routes = [ 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
