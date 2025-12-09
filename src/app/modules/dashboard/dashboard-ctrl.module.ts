import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelCtrl } from './panel-ctrl';
import { PanelAdminRoutingModule } from './dashboard-ctrl-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, PanelCtrl, PanelAdminRoutingModule
  ],
  exports:[PanelCtrl, PanelAdminRoutingModule]
})
export class PanelAdminModule { }
