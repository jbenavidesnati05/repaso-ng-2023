import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropBindingComponent } from './components/prop-binding/prop-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { ForObjectsComponent } from './components/for-objects/for-objects.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { RegistroUsuariosComponent } from './components/registro-usuarios/registro-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropBindingComponent,
    EventBindingComponent,
    DataBindingComponent,
    ForObjectsComponent,
    CalculadoraComponent,
    RegistroUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
