import { Component } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { map }  from  'rxjs/operators';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ejemplo: string = 'Página principal';
  gen: string = '';
  users: any;
  
  constructor(private httpClient: HttpClient) {

    this.users = this.httpClient.get('https://raw.githubusercontent.com/alexdianez/json/master/generador.json').pipe(map(res => res['results']));
  }
 
}
