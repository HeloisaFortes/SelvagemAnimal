import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Animal } from '../../shared/interfaces/animal';
import { CommonModule } from '@angular/common';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-favoritos',
  imports: [MatButtonModule, MatCardModule, MatIconModule, CommonModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit{
 animais: Animal[] = [];
 animaisFavoritos: Animal[] = [];

  constructor(private animalService: AnimalService) {
  }

  ngOnInit(){
    this.animais = this.animalService.animais;
    this.animais.forEach(animal => {
      if (animal.favorito) {
       this.animaisFavoritos.push(animal);
      }
    })
  }



}
