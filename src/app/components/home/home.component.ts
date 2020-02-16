import { Component, OnInit, Output } from '@angular/core';
import { PublicacionService } from '../../services/publicacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private dataApi: PublicacionService) { }
  public publicacions = [];
  public publicacion = '';

  public noticias = [];
  public noticia = '';

  ngOnInit() {
    this.dataApi.getAllPublicacionsImpor().subscribe(publicacions => {
      this.publicacions = publicacions;
    });

    this.dataApi.getAllNews().subscribe(noticias => {
      this.noticias = noticias;
    })
  }
}
