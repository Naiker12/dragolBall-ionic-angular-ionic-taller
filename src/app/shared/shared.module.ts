import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule } from '@angular/common/http';
import { DragonballService } from '../services/dragonball.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { ButtonComponent } from '../components/button/button.component';
import { FooterComponent } from '../components/footer/footer.component';



@NgModule({
  declarations: [ ButtonComponent, HeaderComponent , FooterComponent],
   imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DragonballService ],
  exports: [HttpClientModule , CommonModule , IonicModule , RouterModule ,  ButtonComponent , HeaderComponent , FooterComponent] 
})
export class SharedModule { }
