import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DragolBallPage } from './dragol-ball.page';

const routes: Routes = [
  {
    path: '',
    component: DragolBallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DragolBallPageRoutingModule {}
