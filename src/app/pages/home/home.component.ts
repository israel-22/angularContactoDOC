import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Productos } from '../../utils/productos';
import * as productos from '../../../../public/json/productos.json';

function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Productos: Productos[] = (productos as any).default;
  indiceProducto: number = randomInt(3);

  constructor(private router: Router) {}

  verProducto(id: number): void {
    this.router.navigate(['/productos', id]);
  }
}
