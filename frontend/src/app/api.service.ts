import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl:String = 'http://localhost:3000/api'
  // apiUrl:String ='api'

  constructor(private http :HttpClient) { }

  //to fetch all data list
getofficerList(){
  return this.http.get(`${this.apiUrl}/officerlist`)
}

// to fetch data of a single
getofficerById(id:any){
  return this.http.get(`${this.apiUrl}/officerlist/${id}`)
}


// to delete
deleteofficer(id:any){
  return this.http.delete(`${this.apiUrl}/officerlist/${id}`)
}

// to add new  

addofficer(data:any){
  return this.http.post(`${this.apiUrl}/officer`, data)

}


// to update existing 
updateofficer(data:any){
  return this.http.put(`${this.apiUrl}/officerlist`,data)

}


}
