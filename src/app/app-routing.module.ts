import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcompComponent } from './Componnets/pcomp/pcomp.component';
import { CcompComponent } from './Componnets/ccomp/ccomp.component';
import {TempComponent} from './Componnets/temp/temp.component'
import {ReduxComponent} from'./Componnets/redux/redux.component'

const routes: Routes = [
  {
    path:'',component:ReduxComponent
  },
  {
    path:'child',component:CcompComponent
  },{
    path:'temp',component:TempComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
