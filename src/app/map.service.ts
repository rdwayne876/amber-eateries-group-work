import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
  

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private mapkey = '065ef2421aed6d90a7bb73ee2e532679'
  //default address should be changed depending on the user input
  private address = '224 2 East Greater Portmore, Saint Catherine'
  private apiUrl = `http://api.positionstack.com/v1/forward?access_key=${this.mapkey}&query=${this.address}`

  constructor(private httpClient: HttpClient) {
    
   }

   public sendGetRequest(){
    return this.httpClient.get<any[]>(this.apiUrl)
  }
}
