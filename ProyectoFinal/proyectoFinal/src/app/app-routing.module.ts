import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTicketComponent } from '../app/pages/crear-ticket/crear-ticket.component';
import { MostrarTicketsComponent } from '../app/pages/mostrar-tickets/mostrar-tickets.component';
import { MostrarUsuariosComponent } from '../app/pages/mostrar-usuarios/mostrar-usuarios.component';
import { ListarPrioridadComponent } from '../app/pages/listar-prioridad/listar-prioridad.component';
import { IniciarSesionComponent } from '../app/pages/iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from '../app/pages/crear-cuenta/crear-cuenta.component';
import {VistaAdminComponent} from '../app/pages/vista-admin/vista-admin.component';
import {CambiarEstadoComponent} from '../app/pages/cambiar-estado/cambiar-estado.component';
import {PrincipalComponent} from '../app/pages/principal/principal.component';

const routes: Routes = [
  {path:'',component:PrincipalComponent},
  {path:'crear-cuenta',component:CrearCuentaComponent},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path:'crear-ticket',component:CrearTicketComponent},
  {path:'mostrar-ticket',component:MostrarTicketsComponent},
  {path:'mostrar-usuario',component:MostrarUsuariosComponent},
  {path:'mostrar-prioridad',component:ListarPrioridadComponent},
  {path:'admin',component:VistaAdminComponent},
  {path:'cambiar-estado',component:CambiarEstadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
