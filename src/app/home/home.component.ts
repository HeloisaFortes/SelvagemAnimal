import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Plano } from '../shared/interfaces/plano';

const PLANO_DATA: Plano[] = [
    {plano: 'Explorador', valor: 19.90, beneficios: ['Certificado ', ' Ficha Informativa']},
    {plano: 'Guardião', valor: 49.90, beneficios: ['Kit completo ', ' Vídeos mensais']},
    {plano: 'Protetor', valor: 99.90, beneficios: ['Kit completo ', ' Acesso a lives com especialistas ', ' Brindes Digitais']},
];

@Component({
  selector: 'app-home',
  imports: [MatTableModule, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    displayedColumns: string[] = ['plano', 'valor', 'beneficios'];
    dataSource = PLANO_DATA;
}