import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule } from '@angular/common/http';
import { DragonballService } from '../services/dragonball.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { ButtonComponent } from '../components/button/button.component';
import { FooterComponent } from '../components/footer/footer.component';


const MODULE = [CommonModule, FormsModule, IonicModule, RouterModule , HttpClientModule];
const COMPONENTS = [HeaderComponent, ButtonComponent, FooterComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULE],
  providers: [DragonballService ],
  exports: [...MODULE, ...COMPONENTS] 
})
export class SharedModule { }
