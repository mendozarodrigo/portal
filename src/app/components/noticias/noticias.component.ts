import { Component, OnInit } from '@angular/core';
import { PublicacionService } from '../../services/publicacion.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor(private dataApi: PublicacionService) { }

  public publicacions = [];
  public publicacion = '';


  ngOnInit() {
    this.dataApi.getAllPublicacions().subscribe(publicacions => {
      this.publicacions = publicacions;
    });
  }

}
