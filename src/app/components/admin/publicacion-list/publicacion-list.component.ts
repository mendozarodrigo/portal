import { Component, OnInit } from '@angular/core';
import { PublicacionService } from '../../../services/publicacion.service';

import { AuthService } from '../../../services/auth.service';
import { PublicacionInterface } from '../../../models/publicacion';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-publicacion-list',
  templateUrl: './publicacion-list.component.html',
  styleUrls: ['./publicacion-list.component.css']
})
export class PublicacionListComponent implements OnInit {

  constructor(public dataApi: PublicacionService, public authService: AuthService) { }
  public publicacions: PublicacionInterface[];
  public isAdmin: any = null;
  public userUid: string = null;

  ngOnInit() {
    this.getListPublicacions();
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
          // this.isAdmin = true;
        })
      }
    })
  }
  getListPublicacions() {
    this.dataApi.getPublicacions()
      .subscribe(publicacions => {
        this.publicacions = publicacions;
      });
  }

  onDeletePublicacion(idPublicacion: string): void {
    const confirmacion = confirm('Esta Seguro de Eliminar?');
    if (confirmacion) {
      this.dataApi.deletePublicacion(idPublicacion);
    }
  }

  onPreUpdatePublicacion(publicacion: PublicacionInterface) {
    console.log('PUBLICACION', publicacion);
    this.dataApi.selectedPublicacion = Object.assign({}, publicacion);
  }

  onSavePublicacion(publicacionForm: NgForm ): void {
    if (publicacionForm.value.id == null) {
      // New
//      alert('model public'); 
      publicacionForm.value.userUid = this.userUid;
      this.dataApi.addPublicacion(publicacionForm.value);
    } else {
      // Update
      this.dataApi.updatePublicacion(publicacionForm.value);
    }
    publicacionForm.resetForm();
//    this.btnClose.nativeElement.click();
  }
}