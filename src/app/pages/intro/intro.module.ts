import { NgModule } from '@angular/core';

import { IntroPageRoutingModule } from './intro-routing.module';

import { IntroPage } from './intro.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
     
    SharedModule ,
    IntroPageRoutingModule
  ],
  declarations: [IntroPage]
})
export class IntroPageModule {}
