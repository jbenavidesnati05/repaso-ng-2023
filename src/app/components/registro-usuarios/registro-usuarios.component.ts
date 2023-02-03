import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent {
  titulo = " Registos de usuarios"
  registrado = false
  mensaje = ""
   registrar() {
    this.registrado = true
    this.mensaje = "Usuario registrado con exito"
  }
}
