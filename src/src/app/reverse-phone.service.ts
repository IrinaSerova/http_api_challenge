import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReversePhoneService {
url: string = "https://proapi.whitepages.com/3.0/phone?phone=2061115201&api_key=8195c5b76a8245e9be8515042af98e92";

  constructor(private http: HttpClient) { }
  getData (){
    return this.http.get(this.url)
  }

}
