import { NgModule } from '@angular/core';


import { CharacterDetailPageRoutingModule } from './character-detail-routing.module';

import { CharacterDetailPage } from './character-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
   CharacterDetailPageRoutingModule,
   SharedModule
  ],
  declarations: [CharacterDetailPage]
})
export class CharacterDetailPageModule {}
