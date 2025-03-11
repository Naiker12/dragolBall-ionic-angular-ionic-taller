import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DragonballService } from 'src/app/services/dragonball.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
  standalone : false ,
})
export class CharacterDetailPage implements OnInit {

  characterId: string = '';
  character: any = {} as any;
  

  constructor(
    private actRoute: ActivatedRoute,
    private dragonballSvs: DragonballService
  ) { 
    this.characterId = this.actRoute.snapshot.paramMap.get('id') as string;
    console.log(this.characterId);
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getCharacters();
  }

  getCharacters(event?: any) {
  
    this.dragonballSvs.getCharactersById(this.characterId).subscribe({
      next: (res: any) => {
       
        this.character = res;
      
       
      },
      error: (err : any ) => {
       
      }
    })
    
  }

}
