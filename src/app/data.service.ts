import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Buffer } from 'buffer';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  username = environment.username;
  password = environment.password;
  localvar: any;
  log = `${this.username}` + ':' + `${this.password}`
  url = environment.apiUrl;
  device = 373;
  device1 = 312;
  device2 = 313;
  device3 = 370;
  device4 = 371;
  device5 = 372;
  device6 = 373;

  httpOptions = {
    headers: new HttpHeaders({
    "Content-Type": 'application/json; charset=utf-8',
    'Authorization': 'Basic ' + Buffer.from(`${this.username}` + ':' + `${this.password}`).toString('base64')
    })
  };
  

  constructor(private http: HttpClient) { }

  dataByDevice(device: number) {

    fetch(`https://accenture2.eu10.cp.iot.sap/iot/core/api/v1/devices/${device}/measures?skip=0&top=100`, {
      method: 'GET',
      headers: new Headers({
        "Content-Type": 'application/json; charset=utf-8',
        'Authorization': 'Basic ' + Buffer.from(`${this.username}` + ':' + `${this.password}`).toString('base64')
      })
    })
      .then(response => {
        response.json()
          .then(data => {
            console.log("whit device id ", data)
            return data
          })
      })
  }

  getData1(){
    return this.http.get(`https://accenture2.eu10.cp.iot.sap/iot/core/api/v1/devices/${this.device1}/measures?skip=0&top=100`, this.httpOptions)
   }
  getData2(){
    return this.http.get(`https://accenture2.eu10.cp.iot.sap/iot/core/api/v1/devices/${this.device2}/measures?skip=0&top=100`, this.httpOptions)
   }

  getData3(){
    return this.http.get(`https://accenture2.eu10.cp.iot.sap/iot/core/api/v1/devices/${this.device3}/measures?skip=0&top=100`, this.httpOptions)
   }

  getData4(){
    return this.http.get(`https://accenture2.eu10.cp.iot.sap/iot/core/api/v1/devices/${this.device4}/measures?skip=0&top=100`, this.httpOptions)
   }

  getData5(){
    return this.http.get(`https://accenture2.eu10.cp.iot.sap/iot/core/api/v1/devices/${this.device5}/measures?skip=0&top=100`, this.httpOptions)
   } 

 getData6(){
   return this.http.get(`https://accenture2.eu10.cp.iot.sap/iot/core/api/v1/devices/${this.device6}/measures?skip=0&top=100`, this.httpOptions)
  }
  
}
