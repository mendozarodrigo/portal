import { Component, OnInit } from '@angular/core';
import { OnlineService } from '../../services/online.service';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {

  constructor(private dataApi: OnlineService ) { }

  public onlines = [];
  public online = '';


  ngOnInit() {
    this.dataApi.getAllOnlines().subscribe(onlines => {
      this.onlines = onlines;
    });
  }
}
