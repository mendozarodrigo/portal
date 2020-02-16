import { Component, OnInit } from '@angular/core';
import { OnlineService } from '../../../services/online.service';

import { AuthService } from '../../../services/auth.service';
import { OnlineInterface } from '../../../models/online';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-online-list',
  templateUrl: './online-list.component.html',
  styleUrls: ['./online-list.component.css']
})
export class OnlineListComponent implements OnInit {

  constructor(public dataApi: OnlineService, public authService: AuthService) { }
  public onlines: OnlineInterface[];
  public isAdmin: any = null;
  public userUid: string = null;

  ngOnInit() {
    this.getListOnlines();
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
  getListOnlines() {
    this.dataApi.getOnlines()
      .subscribe(onlines => {
        this.onlines = onlines;
      });
  }

  onDeleteOnline(idOnline: string): void {
    const confirmacion = confirm('Are you sure?');
    if (confirmacion) {
      this.dataApi.deleteOnline(idOnline);
    }
  }

  onPreUpdateOnline(online: OnlineInterface) {
    console.log('PUBLICACION', online);
    this.dataApi.selectedOnline = Object.assign({}, online);
  }

  onSaveOnline(onlineForm: NgForm ): void {
    if (onlineForm.value.id != null) {
      // Update
      this.dataApi.updateOnline(onlineForm.value);
    }
    onlineForm.resetForm();
//    this.btnClose.nativeElement.click();
  }
}