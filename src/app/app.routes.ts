import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component'; // Asegúrate de que la ruta sea correcta
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'productos', component: ProductosComponent ,...canActivate (()=>redirectUnauthorizedTo(['/login']))},
  { path: 'productos/:id', component: ProductoDetalleComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // todo va arriba del error
  { path: '**', component: Error404Component },
  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
