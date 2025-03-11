import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: false
})
export class ButtonComponent {
  @Input() text: string = 'Ir a Intro'; 
  @Input() route: string = '/intro'; 

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate([this.route]);
  }
}
