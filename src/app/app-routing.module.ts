import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ProgramasComponent } from './components/programas/programas.component';
import { FarandulaComponent } from './components/farandula/farandula.component';
import { SugerenciasComponent } from './components/sugerencias/sugerencias.component';
import { ContactameComponent } from './components/contactame/contactame.component';
import { OnlineComponent } from './components/online/online.component';
import { PublicacionListComponent } from './components/admin/publicacion-list/publicacion-list.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { AuthGuard } from './guards/auth.guard';
import { DetallePublicacionComponent } from './components/detalle-publicacion/detalle-publicacion.component';
import { ProgramaComponent } from './components/programa/programa.component';
import { OnlineListComponent } from './components/admin/online-list/online-list.component';
import { NotaListComponent } from './components/admin/nota-list/nota-list.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'about', component: AboutComponent },
  {path: 'programas', component: ProgramasComponent},
  {path: 'programas/:id', component: ProgramaComponent},
  {path: 'farandula', component: FarandulaComponent},
  {path: 'sugerencias', component: SugerenciasComponent},
  {path: 'contactame', component: ContactameComponent},
  {path: 'online', component: OnlineComponent},
  { path: 'publicacion/:id', component: DetallePublicacionComponent },
  // rutas admin
  {path: 'admin/publicaciones', component: PublicacionListComponent, canActivate: [AuthGuard]},
  {path: 'admin/notas', component: NotaListComponent, canActivate: [AuthGuard]},
  {path: 'admin/en_vivo', component: OnlineListComponent, canActivate: [AuthGuard]},
//  { path: 'offers', component: OffersComponent, canActivate: [AuthGuard] },
//  { path: 'book/:id', component: DetailsBookComponent },
 // { path: 'admin/list-books', component: ListBooksComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
//  { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', component: Page404Component },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
