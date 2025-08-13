import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimaisComponent } from './componentes/animais/animais.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { CadastrarPedidoComponent } from './componentes/cadastrar-pedido/cadastrar-pedido.component';
import { AtualizarPedidoComponent } from './componentes/atualizar-pedido/atualizar-pedido.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'animais',
        component: AnimaisComponent
    },
    {   path: 'favoritos',
        component: FavoritosComponent
    }, 
    {   path: 'pedidos',
        component: PedidosComponent
    },
    {
        path: 'cadastrar-pedido',
        component: CadastrarPedidoComponent
    },
    {
        path: 'atualizar-pedido',
        component: AtualizarPedidoComponent
    }
];
