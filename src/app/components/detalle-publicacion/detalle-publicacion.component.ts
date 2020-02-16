import { Component, OnInit } from '@angular/core';
import { PublicacionService } from '../../services/publicacion.service';
import { PublicacionInterface } from '../../models/publicacion';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-publicacion',
  templateUrl: './detalle-publicacion.component.html',
  styleUrls: ['./detalle-publicacion.component.css']
})
export class DetallePublicacionComponent implements OnInit {

  constructor(private dataApi: PublicacionService, private route: ActivatedRoute ) { }
  public pub: PublicacionInterface = {};

  ngOnInit() {
    const idPublicacion = this.route.snapshot.params['id'];
    this.getDetails(idPublicacion);
  }

  getDetails(idPublicacion: string): void {
    this.dataApi.getOnePublicacion(idPublicacion).subscribe(pub => {
      this.pub = pub;
//      alert(pub.titulo);
    });
  }

}
