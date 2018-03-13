import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../global';


@Injectable()
export class ServicioService {
  

  constructor(public http: HttpClient) {

    console.log('TodosService constructor');
  }



getTodos():Observable<any>{

  let url = GLOBAL.endpoint + '/todos';
  console.log(`TodosService getTodos ${url}`);

  return this.http.get(url);

}

}