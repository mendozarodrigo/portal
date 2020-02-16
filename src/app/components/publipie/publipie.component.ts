import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-publipie',
  templateUrl: './publipie.component.html',
  styleUrls: ['./publipie.component.css']
})
export class PublipieComponent implements OnInit {
  @Input () url1: string;
  @Input () url2: string;
  
  urlSafe1: SafeResourceUrl ;
  urlSafe2: SafeResourceUrl ;

  constructor(private authService: AuthService , private afsAuth: AngularFireAuth, public sanitizer: DomSanitizer ) { }
  public isLogged: boolean = false;
  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.urlSafe1= this.sanitizer.bypassSecurityTrustResourceUrl(this.url1);
        this.urlSafe2= this.sanitizer.bypassSecurityTrustResourceUrl(this.url2);
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    });
  }
}
