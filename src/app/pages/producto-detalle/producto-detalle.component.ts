import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  productoId!: number;
  producto: any;  // Propiedad para almacenar los detalles del producto

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.productoId = +this.route.snapshot.paramMap.get('id')!;
    this.cargarProducto(this.productoId);
  }

  cargarProducto(id: number): void {
    // Suponiendo que los productos están en un archivo JSON en assets
    this.http.get<any[]>('/assets/productos.json').subscribe(productos => {
      this.producto = productos.find(p => p.id === id);
    });
  }
}
