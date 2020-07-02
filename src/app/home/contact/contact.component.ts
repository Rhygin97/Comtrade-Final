import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  styles: ['agm-map { height: 300px; }'],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  lat = 44.026515;
  lng = 20.462842;
  zoom = 15;
  title = 'Malware store'
  mapType = 'satellite';
  // selectedMarker;

  // selectedMarker(event){
  //   this.selectedMarker = {
  //     lat: event.latitude,
  //     lng: event.longitude
  //   };
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
