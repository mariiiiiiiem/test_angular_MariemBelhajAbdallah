import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Showroom} from "../../models/Showroom";
import {ShowroomServiceService} from "../services/showroom-service.service";

@Component({
  selector: 'app-show-showroom',
  templateUrl: './show-showroom.component.html',
  styleUrls: ['./show-showroom.component.css']
})
export class ShowShowroomComponent implements OnInit{
  id!:number
  constructor(
    private activatedRoute : ActivatedRoute,
    private showRoomservice: ShowroomServiceService
  ) {}
  showrooms:Showroom[]=[]

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params["id"];

    this.showRoomservice.getshowroomById(this.id)
      .subscribe((data)=>{
        this.showrooms.push( data as any)
        console.log(this.showrooms);
      })
  }

}
