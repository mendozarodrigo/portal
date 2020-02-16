import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements   OnInit{
  @Input () urlVideo: string;
  
  urlSafe: SafeResourceUrl;


  constructor(public sanitizer: DomSanitizer) {
    
   }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.urlVideo);
  }

}
