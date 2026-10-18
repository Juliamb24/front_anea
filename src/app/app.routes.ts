import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ShopComponent } from './pages/shop/shop.component';
import { TeamComponent } from './pages/team/team.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DonacionComponent } from './pages/donacion/donacion.component';
import { AnillamientoComponent } from './pages/anillamiento/anillamiento.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ColaboracionesComponent } from './pages/colaboraciones/colaboraciones.component';
import { AdminPedidosComponent } from './pages/admin-pedidos/admin-pedidos.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'tienda', component: ShopComponent },
  { path: 'equipo', component: TeamComponent },
  { path: 'socios', component: MembershipComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'donacion', component: DonacionComponent },
  { path: 'anillamiento', component: AnillamientoComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'colaboraciones', component: ColaboracionesComponent },
{ 
  path: 'admin-pedidos-anea', 
  component: AdminPedidosComponent,

}

];
