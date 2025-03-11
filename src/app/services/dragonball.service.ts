import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  constructor(private http: HttpClient) { }

  getCharacters(params: any) {
    return this.http.get(environment.baseUrl + environment.characters , {params});
  }

  getCharactersById(id: string) {
    return this.http.get(environment.baseUrl + environment.characters + id);
  }

  // getByUrl(url: string) {
  //   return this.http.get(url);
  // }

}
