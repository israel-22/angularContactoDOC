import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css'
})
export class ProductoDetalleComponent implements OnInit  {
  producto: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cargarProducto(id);
  }

  cargarProducto(id: string | null) {
    this.http.get<any[]>('assets/productos.json').subscribe(data => {
      this.producto = data.find(p => p.id === Number(id));
    }, error => {
      console.error('Error al cargar los datos del producto', error);
    });
  }
}
