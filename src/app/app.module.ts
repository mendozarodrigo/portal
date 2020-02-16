import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './components/portada/portada.component';
import { PieComponent } from './components/pie/pie.component';
import { DerechaComponent } from './components/derecha/derecha.component';
import { HomeComponent } from './components/home/home.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ProgramasComponent } from './components/programas/programas.component';
import { FarandulaComponent } from './components/farandula/farandula.component';
import { SugerenciasComponent } from './components/sugerencias/sugerencias.component';
import { ContactameComponent } from './components/contactame/contactame.component';
import { OnlineComponent } from './components/online/online.component';
import { PublicidadComponent } from './components/publicidad/publicidad.component';
import { PublicacionListComponent } from './components/admin/publicacion-list/publicacion-list.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { NavbarComponent } from './components/navbar/navbar.component'

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { CKEditorModule } from 'ckeditor4-angular';
import { PublipieComponent } from './components/publipie/publipie.component';
import { IframeComponent } from './components/iframe/iframe.component';
import { DetallePublicacionComponent } from './components/detalle-publicacion/detalle-publicacion.component';
import { FacebookComponent } from './components/facebook/facebook.component';
import { ProgramaComponent } from './components/programa/programa.component';
import { OnlineListComponent } from './components/admin/online-list/online-list.component';
import { NotaListComponent } from './components/admin/nota-list/nota-list.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    PieComponent,
    DerechaComponent,
    HomeComponent,
    NoticiasComponent,
    ProgramasComponent,
    FarandulaComponent,
    SugerenciasComponent,
    ContactameComponent,
    OnlineComponent,
    PublicidadComponent,
    PublicacionListComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    Page404Component,
    NavbarComponent,
    PublipieComponent,
    IframeComponent,
    DetallePublicacionComponent,
    FacebookComponent,
    ProgramaComponent,
    OnlineListComponent,
    NotaListComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    CKEditorModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
