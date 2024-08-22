import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import{NosotrosComponent} from './pages/nosotros/nosotros.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'nosotros', component:NosotrosComponent },
    { path: 'productos', component: ProductosComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },//se suponew que no deveria tener los asteriscos
    {path: '**', component:Error404Component}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }