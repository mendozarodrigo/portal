import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PublicacionService } from '../../../services/publicacion.service';
import { AuthService } from '../../../services/auth.service';
import { PublicacionInterface } from '../../../models/publicacion';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-nota-list',
  templateUrl: './nota-list.component.html',
  styleUrls: ['./nota-list.component.css']
})
export class NotaListComponent implements OnInit {

  constructor(public dataApi: PublicacionService , public authService: AuthService, public storage: AngularFireStorage ) { }
  @ViewChild ('imageUser', {static: false}) inputImageUser: ElementRef ;

//  uploadPercent: Observable <number>;
  urlImage: Observable<string>;

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
    this.dataApi.getNotas()
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
      publicacionForm.value.photoURL = this.inputImageUser.nativeElement.value
      this.dataApi.addPublicacion(publicacionForm.value);
    } else {
      // Update
      this.dataApi.updatePublicacion(publicacionForm.value);
    }
    publicacionForm.resetForm();
//    this.btnClose.nativeElement.click();
  }

  onUpload(e) {
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `notas/nota_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
  //  this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }
  /*
  onAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.authService.isAuth().subscribe(user => {
          if (user) {
            user.updateProfile({
              displayName: '',
              photoURL: this.inputImageUser.nativeElement.value
            }).then(() => {
              this.router.navigate(['admin/publicaciones']);
            }).catch((error) => console.log('error', error));
          }
        });
      }).catch(err => console.log('err', err.message));
  }
*/

}
