import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Productos } from '../../utils/productos';
import * as productos from '../../../../public/json/productos.json';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  Productos: Productos[] = (productos as any).default;

  constructor(private router: Router) {}

  verDetalle(productoId: number) {
    // Navegar a la página de detalle del producto
    this.router.navigate(['/productos', productoId]);
  }
}
