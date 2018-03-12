import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
const END_POINT = "192.168.99.1:3000/todos";
@Injectable()
export class ServicioService {


  constructor() { }

}
/*
getTodos():Observable<any>{
  let url = END_POINT + '/todos';
  console.log(`TodosService getTodos ${url}`);

  return this.http.get(url);

}*/