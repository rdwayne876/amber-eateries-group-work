import { Component, AfterViewInit } from '@angular/core';
import { MapService } from '../map.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map: any;
  private data: any = [];
  lat: any;
  lon: any;


  constructor(private mapService: MapService) { }


  private initMap(): void {
    this.mapService.sendGetRequest().subscribe((data: any[]) => {
      this.data = data
      this.lat = this.data.data[0].latitude
      this.lon = this.data.data[0].longitude

      this.map = L.map('map', {
        center: [this.lat, this.lon],
        zoom: 10
      });

      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });

      tiles.addTo(this.map);
      const marker = L.marker([this.lat, this.lon])
      marker.addTo(this.map)
    })


  }

  ngAfterViewInit(): void {
    this.initMap();
  }

}
