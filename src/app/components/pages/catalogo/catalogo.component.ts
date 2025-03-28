import { Component, inject, signal } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import {ProductService} from '../../../services/product.service';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  imports: [
    NgOptimizedImage
  ]
})
export class CatalogoComponent {
  categoryService = inject(CategoryService);
  categorias = signal<any[]>([]);
  productoService = inject(ProductService);
  productos = signal<any[]>([]);


  constructor() {
    this.categoryService.obtenerCategorias().subscribe((data) => {
      this.categorias.set(data);
    });
    this.productoService.obtenerProductos().subscribe((data) => {
      this.productos.set(data);
    });
  }

  protected readonly Math = Math;
}
