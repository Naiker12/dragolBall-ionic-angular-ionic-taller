import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DragonballService } from 'src/app/services/dragonball.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  charatacters: any[] = [];
  params = {} as any;
  isSearching = false;

  constructor(private dragonballSvs: DragonballService) {}

  ngOnInit() {
    this.params.page = 1;
    this.getCharacters();
  }

  getCharacters(event?: any) {
    if (!this.isSearching) {
      this.params.page += 1;
    }

    this.dragonballSvs.getCharacters(this.params).subscribe({
      next: (res: any) => {
        let characters = [];

        if (Array.isArray(res)) {
          characters = res;
        } else if (res && res.items && Array.isArray(res.items)) {
          characters = res.items;
        } else if (res && res.data && Array.isArray(res.data)) {
          characters = res.data;
        } else {
          characters = [];
        }

        if (this.isSearching || this.params.page === 1) {
          this.charatacters = characters;
        } else {
          this.charatacters.push(...characters);
        }

        if (event) event.target.complete();
      },
      error: (err: any) => {
        if (event) event.target.complete();
      },
    });
  }

  // ======== FUNCIÓN DE BÚSQUEDA ========
  searchCharacters() {
    const searchTerm = this.params.name?.trim();
    if (!searchTerm) {
      this.clearSearch();
      return;
    }

    this.isSearching = true;
    this.charatacters = [];

    const searchParams = { name: searchTerm };

    this.dragonballSvs.getCharacters(searchParams).subscribe({
      next: (res: any) => {
        let searchResults = [];

        if (Array.isArray(res)) {
          searchResults = res;
        } else if (res && res.items) {
          searchResults = res.items;
        } else if (res && res.data) {
          searchResults = res.data;
        } else {
          searchResults = [];
        }

        this.charatacters = searchResults;

        if (this.charatacters.length === 0) {
        }
      },
      error: (err: any) => {
        this.charatacters = [];
      },
    });
  }

  clearSearch() {
    this.params.name = '';
    this.isSearching = false;
    this.params.page = 0;
    this.charatacters = [];
    this.getCharacters();
  }

  loadMoreCharacters(event: any) {
    if (this.isSearching) {
      event.target.complete();
      return;
    }
    this.getCharacters(event);
  }
}
