import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Showroom} from "../../models/Showroom";

@Injectable({
  providedIn: 'root'
})
export class ShowroomServiceService {
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
  addshowroo(showroom:Showroom):Observable<Showroom[]>{
    return this.http.post<Showroom[]>('http://localhost:3000/Showroom',showroom)
  }
  getshowroo():Observable<Showroom[]>{
    return this.http.get<Showroom[]>('http://localhost:3000/Showroom')
  }
  deleteshowroom(id:any):Observable<Showroom[]>{
    return this.http.delete<Showroom[]>('http://localhost:3000/Showroom/'+id)
  }
  updateshowroom(id:any,showroom:Showroom):Observable<Showroom[]>{
    return this.http.put<Showroom[]>('http://localhost:3000/Showroom/'+id,showroom)
  }
  getshowroomById(id:any):Observable<Showroom[]>{
    return this.http.get<Showroom[]>('http://localhost:3000/Showroom/'+id)
  }
}
