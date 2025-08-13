import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {

  }

  openGitHub() {
    window.location.href = 'https://github.com/HeloisaFortes/selvagemVirtual';
  }

  irParaPaginaInicial() {
    this.router.navigate(['/']);
  }

  irParaAnimais() {
    this.router.navigate(['/animais']);
  }

  irParaFavoritos() {
    this.router.navigate(['/favoritos']);
  }

  irParaPedidos(){
    this.router.navigate(['/pedidos']);
  }


}
