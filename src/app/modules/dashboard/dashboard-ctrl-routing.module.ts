import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';
import { PanelCtrl } from './panel-ctrl';

const routes: Routes = [
  {
    path: '',
    component: PanelCtrl
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelAdminRoutingModule { }