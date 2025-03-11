import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DragonballService } from 'src/app/services/dragonball.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone : false 
})


export class HomePage implements OnInit {

  charatacters: any[] = [];
  params = {} as any;

  constructor(
    private dragonballSvs: DragonballService,
  ) { }

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters();
  }

  getCharacters(event?: any) {
    this.params.page += 1;

    this.dragonballSvs.getCharacters(this.params).subscribe({
      next: (res: any) => {
        this.charatacters.push(...res.items);
        console.log(this.charatacters);

        if (event) event.target.complete();
      },
      error: (err : any ) => {
        if (event) event.target.complete();
      }
    })
    
  }

  //======== Byscar por nombre de personaje =========
  searchCharacters() {
    const searchTerm = this.params.name?.trim().toLowerCase();
    console.log('Término de búsqueda:', searchTerm); 
  
    if (!searchTerm) {
      this.resetCharacterList(); 
      return;
    }
  
    this.dragonballSvs.getCharacters(this.params).subscribe({
      next: (res: any) => {
        console.log('Personajes obtenidos:', res); 
  
        if (!res || !res.items) { 
          console.warn('⚠️ Advertencia: res.items está undefined');
          this.charatacters = [];
          return;
        }
  
        this.charatacters = res.items.filter((character: any) =>
          character.name?.toLowerCase().includes(searchTerm)
        );
  
        console.log('Personajes filtrados:', this.charatacters);
      },
      error: (err: any) => {
        console.error('Error al buscar personajes:', err);
        this.charatacters = [];
      }
    });
  }
  
  
  // Función para restablecer la lista original
  resetCharacterList() {
    this.dragonballSvs.getCharacters(this.params).subscribe({
      next: (res: any) => {
        this.charatacters = res.items;
      },
      error: (err: any) => {
        console.error('Error al obtener la lista de personajes:', err);
      }
    });
  }
  
  
}


