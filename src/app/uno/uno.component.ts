import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

nombre:string;
id :string;

  constructor() {

    this.nombre="manolo";
   }



  ngOnInit() {
  }

  mostrar(){

if (this.id=="5"){

  console.log("funciona");

}
else{

  console.log("no funciona");

}


  }

}
