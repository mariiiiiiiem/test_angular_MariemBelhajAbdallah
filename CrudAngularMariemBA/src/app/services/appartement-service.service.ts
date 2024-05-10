import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Apartement} from "../../models/Apartement";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppartementServiceService {

  constructor(    private http :HttpClient
  ) {

  }
  checkListContent(list:any , criteria:string, value:any){
    let count=0;
    for(let i in list){
      if(list[i][criteria]==value){
        count++;
      }
    }
    return count;
  }
  addAppartement(appart:Apartement):Observable<Apartement[]>{
    return this.http.post<Apartement[]>('http://localhost:3000/appartement',appart)
  }
  getAppartement():Observable<Apartement[]>{
    return this.http.get<Apartement[]>('http://localhost:3000/appartement')
  }
  deleteAppart(id:any):Observable<Apartement[]>{
    return this.http.delete<Apartement[]>('http://localhost:3000/appartement/'+id)
  }
  updateAppart(id:any,appart:Apartement):Observable<Apartement[]>{
    return this.http.put<Apartement[]>('http://localhost:3000/appartement/'+id,appart)
  }
  getAppartById(id:any):Observable<Apartement[]>{
    return this.http.get<Apartement[]>('http://localhost:3000/appartement/'+id)
  }
}
