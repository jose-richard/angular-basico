import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  constructor(private dbzService: DbzService){}

  @Input()
  nuevoAgregar: Personaje = {
    nombre: "",
    poder: 0
  }

  /* @Output()
  onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); */

  agregar() {
    if (this.nuevoAgregar.nombre.trim().length === 0) {
      return;
    }
    /* this.onNuevoPersonaje.emit(this.nuevoAgregar); */
    this.dbzService.agregarPersonaje(this.nuevoAgregar);
    this.nuevoAgregar = {
      nombre: "",
      poder: 0
    }
  }


}
