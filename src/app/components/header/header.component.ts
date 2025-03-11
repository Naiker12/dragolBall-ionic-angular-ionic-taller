import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule , Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone : false
})
export class HeaderComponent  implements OnInit {

  @Input() title: string = 'Default Text';

  constructor(private router: Router) { }

  getFavorites() {
    this.router.navigate(['/favoritos']);
  }

  getDocuments() {
    window.open('https://web.dragonball-api.com/documentation', '_blank');
  }
  

  ngOnInit() {}

}
