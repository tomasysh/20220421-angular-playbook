import { PokemonService } from './../shared/services/pokemon.service';
import { Product } from './../shared/models/product.model';
import { ProductService } from './../shared/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  buyProducts: number[] = [];

  defaultSize = 50;

  imgSrc = '';
  imgSrcBack = '';
  imgSrcFront = '';

  constructor(
    private productService: ProductService,
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.pokemonService.getPokemons().subscribe((res) => {
      console.log('pokemons', res);
    })

    this.pokemonService.getPokemonDetail().subscribe((res) => {
      console.log('detail', res.sprites);
      this.imgSrcBack = res.sprites.back_default;
      this.imgSrcFront = res.sprites.front_default;
      this.imgSrc = this.imgSrcBack;
    })
  }


  addToCart(productId: number): void {
    console.log('first', this.buyProducts);
    // this.buyProducts.push(productId);
    // 解構賦值 (概念是 不可變物件)
    this.buyProducts = [...this.buyProducts, productId];
    console.log('first', this.buyProducts);

  }

}
