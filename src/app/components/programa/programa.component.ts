import { Component, OnInit, Input } from '@angular/core';
import { PublicacionService } from '../../services/publicacion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css']
})
export class ProgramaComponent implements OnInit {
  @Input () idPrograma: string;
  
  constructor(private dataApi: PublicacionService, private route: ActivatedRoute ) { 

  }

  public publicacions = [];
  public publicacion = '';

  ngOnInit() {

    const id = this.route.snapshot.params['id'];
    this.dataApi.getAllPrograma(id).subscribe(publicacions => {
      this.publicacions = publicacions;
    });
  }

}
