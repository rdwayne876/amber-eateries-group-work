import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from './interfaces/checkout';
  

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private mapkey = '065ef2421aed6d90a7bb73ee2e532679';
  // private token = 'pk.9e2fb5f3d25bf5aeca4293bae2b026ee';
  //default address should be changed depending on the user input
  address: Address = {street_address: "Transport Centre", street_address2: "Half-Way Tree", city_town: "Kingston", parish: "Kingston"}; 
  private get apiUrl() : string {
    return `http://api.positionstack.com/v1/forward?access_key=${this.mapkey}&query=${this.address.street_address + ", " + this.address.street_address2 + ", " + this.address.city_town + ", " + this.address.parish + ", Jamaica" }`;
    // return `https://us1.locationiq.com/v1/search?key=${this.token}&street=${this.address.street_address + ", " + this.address.street_address2}&city=${this.address.city_town}&state=${this.address.parish}&country=Jamaica&format=json`;

  }
  

  constructor(private httpClient: HttpClient) {
    
   }

   public getMap(){
    return this.httpClient.get<any[]>(this.apiUrl)
  }
}
