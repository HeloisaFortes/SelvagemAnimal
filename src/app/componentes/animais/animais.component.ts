import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Animal } from '../../shared/interfaces/animal';
import { CommonModule } from '@angular/common';
import { AnimalService } from '../../services/animal.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AsyncPipe} from '@angular/common';
import { map, Observable, startWith } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-animais',
  imports: [
    MatButtonModule, 
    MatCardModule, 
    MatIconModule, 
    CommonModule, 
    MatAutocompleteModule, 
    MatInputModule, 
    MatFormFieldModule, 
    AsyncPipe, 
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './animais.component.html',
  styleUrl: './animais.component.css'
})
export class AnimaisComponent implements OnInit{
  myControl = new FormControl('');
  filteredOptions!: Observable<Animal[]>;
  animais: Animal[] = [];

  constructor(private animalService: AnimalService) {
  }

  ngOnInit() {
    this.animais = this.animalService.animais;

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): Animal[] {
    const filterValue = value.toLowerCase();
    return this.animais.filter(option => option.nome.toLowerCase().startsWith(filterValue));
  }
}	








