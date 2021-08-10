import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes: String[] = ['spideman','ironman','hulk'];

  heroeBorrado: String = "";

  eliminarHeroe(){
   this.heroeBorrado = this.heroes.pop() || "";
   console.log(this.heroeBorrado);
  }
  isBorrado():boolean {
    return this.heroeBorrado.length != 0;
  }
}
