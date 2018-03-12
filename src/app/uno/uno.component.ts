import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

nombre:string;
id :number;
texto:string;

  constructor() {

    this.nombre="manolo";
   }



  ngOnInit() {
  }

  mostrar(){

if (this.id==5){
this.texto="Se ha encontrado un registro";
  console.log("funciona");

}
else{
  this.texto="No se ha encontrado ningun registro";
  console.log("no funciona");

}


  }

}
