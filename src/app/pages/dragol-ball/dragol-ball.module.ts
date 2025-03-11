import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DragolBallPageRoutingModule } from './dragol-ball-routing.module';

import { DragolBallPage } from './dragol-ball.page';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    DragolBallPageRoutingModule ,
    SharedModule ,
   
  ],
  declarations: [DragolBallPage]
})
export class DragolBallPageModule {}
