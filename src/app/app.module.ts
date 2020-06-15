import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablapersonasComponent } from './components/tablapersonas/tablapersonas.component';
import { TabladomicilioComponent } from './components/tabladomicilio/tabladomicilio.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ModalPersonaComponent } from './components/modal-persona/modal-persona.component';
import { ModalDomicilioComponent } from './components/modal-domicilio/modal-domicilio.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module



@NgModule({
  declarations: [
    AppComponent,
    TablapersonasComponent,
    TabladomicilioComponent,
    ModalPersonaComponent,
    ModalDomicilioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
