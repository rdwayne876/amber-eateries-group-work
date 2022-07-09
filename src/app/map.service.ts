import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from './interfaces/checkout';
  

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private mapkey = '065ef2421aed6d90a7bb73ee2e532679';
  //default address should be changed depending on the user input
  address: Address = {street_address: "224", street_address2: "2 East", city_town: "Greater Portmore", parish: "St Catherine"}; 
  private get apiUrl() : string {
    return `http://api.positionstack.com/v1/forward?access_key=${this.mapkey}&query=${this.address.street_address + " " + this.address.street_address2 + " " + this.address.city_town + ", " + this.address.parish + ", Jamaica" }`;
  }
  

  constructor(private httpClient: HttpClient) {
    
   }

   public getMap(){
    return this.httpClient.get<any[]>(this.apiUrl)
  }
}
