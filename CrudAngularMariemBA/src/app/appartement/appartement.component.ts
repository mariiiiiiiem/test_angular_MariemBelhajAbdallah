import {Component, OnInit} from '@angular/core';
import {AppartementServiceService} from "../services/appartement-service.service";
import {Apartement} from "../../models/Apartement";

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent  implements OnInit{


  constructor(private appartementservice:AppartementServiceService) {
  }
  lisappart:Apartement[]=[]

  getallappatments(){
    this.appartementservice.getAppartement().subscribe(
      (data)=>{
        this.lisappart=data
        console.log(JSON.stringify(this.lisappart));
      }

    )


  }
  deleteAppart(id: number, i: number) {
    this.appartementservice.deleteAppart(id).subscribe(p=>{
      this.lisappart.splice(i,1)
      //window.location.reload();
    });
  }
  update(){

  }

    ngOnInit(): void {
      console.log(this.getallappatments())
    this.getallappatments()
    }




}
