import { Component, OnInit, } from '@angular/core';
import { ServicioService } from '../providers/servicio.service';
import { datos } from '../model/datos';


@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

nombre:string;
id :number;
todos: datos[];

  constructor(public servicioService:ServicioService) {

    this.todos = [];
    this.nombre="manolo";
   }



   ngOnInit() {
    
  }

  mapeo(result: any) {

    let todo: datos;
    result.forEach(el => {
      todo = new datos(el.title);
      todo.id = el.id;
     

      this.todos.push(todo);
    });

  }

  mostrar(){

    console.log('TodosComponent ngOnInit');
     this.servicioService.getTodos().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error => {
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
/*
if (this.id==5){
this.texto="Se ha encontrado un registro";
  console.log("funciona");

}
else{
  this.texto="No se ha encontrado ningun registro";
  console.log("no funciona");

}

*/
  }

}
