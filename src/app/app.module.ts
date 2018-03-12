import { BrowserModule } from '@angular/platform-browser';

/*Necesarios para ngmodule y formularios*/
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

/*Import de los componentes y servicios */
import { AppComponent } from './app.component';
import { UnoComponent } from './uno/uno.component';
import { ServicioService } from './providers/servicio.service';


@NgModule({
  declarations: [
    AppComponent,
    UnoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ServicioService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
