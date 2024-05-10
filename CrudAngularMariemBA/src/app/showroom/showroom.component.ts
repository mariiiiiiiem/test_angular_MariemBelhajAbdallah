import {Component, OnInit} from '@angular/core';
import {ShowroomServiceService} from "../services/showroom-service.service";
import {Apartement} from "../../models/Apartement";
import {Showroom} from "../../models/Showroom";

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.css']
})
export class ShowroomComponent implements OnInit {

  listShowroom:Showroom[]=[]

  ngOnInit(): void {
    this.getallshowrooms()
    }
    constructor(private serviceshowroom:ShowroomServiceService) {
    }
  deleteAppart(id: number, i: number) {
    this.serviceshowroom.deleteshowroom(id).subscribe(p=>{
      this.listShowroom.splice(i,1)
      //window.location.reload();
    });
  }
  getallshowrooms() {
    this.serviceshowroom.getshowroo().subscribe(
      (data) => {
        this.listShowroom = data
        console.log(JSON.stringify(this.listShowroom));
      }
    )
  }
}
