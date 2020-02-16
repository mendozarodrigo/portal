import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})
export class PublicidadComponent implements OnInit {
  @Input () url: string;
  urlSafe: SafeResourceUrl ;

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth, public sanitizer: DomSanitizer ) { }
  
  public isLogged: boolean = false;
  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.isLogged = true;
        this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
      } else {
        this.isLogged = false;
      }
    });
  }

}
