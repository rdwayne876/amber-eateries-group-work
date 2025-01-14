import { Component, AfterViewInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as L from 'leaflet';
import { CheckoutService } from 'src/app/services/checkout.service';
import { CartService } from 'src/app/cart.service';
import { MapService } from '../../map.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
    private map: any;
    lat: any;
    lon: any;
    private marker: any;
    rateLimiter = false;


    // @Input('appMap') set refresh(value: boolean) {
    //   this.setMapLocation();
    //   // this.refresh = value;
    // }

    constructor(
        private mapService: MapService,
        public checkoutService: CheckoutService
    ) {}


    initMap(): void {
        this.map = L.map('map', {
            zoom: 10,
        });

        const tiles = L.tileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                maxZoom: 18,
                minZoom: 3,
                attribution:
                    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            }
        );
        tiles.addTo(this.map);

        this.setMapLocation();
    }

    setMapLocation(): boolean {    
        if (!this.rateLimiter) {
            this.rateLimiter = true;
            setTimeout(() => {
                this.rateLimiter = false;
            }, 1000);
        } else {
            return false;
        }
        this.mapService.getMap().subscribe((data: any) => {
            // this.lat = data.data[0].latitude ?? 17.96795;
            // this.lon = data.data[0].longitude ?? -76.87128;
            this.lat = data[0].lat ?? 17.96795;
            this.lon = data[0].lon ?? -76.87128;
            this.addMarker();
        });
        return true;

    }

    private addMarker(): void {
        if (this.marker) this.marker.remove();

        this.marker = L.marker([this.lat, this.lon]);
        this.marker.addTo(this.map);

        this.map.panTo([this.lat, this.lon]);
    }

    ngAfterViewInit(): void {
        this.initMap();
    }
}
