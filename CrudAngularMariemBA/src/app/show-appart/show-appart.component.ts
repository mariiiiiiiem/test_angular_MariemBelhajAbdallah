import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Residence} from "../../models/Residence";
import {ActivatedRoute} from "@angular/router";
import {AppartementServiceService} from "../services/appartement-service.service";
import {Apartement} from "../../models/Apartement";

@Component({
  selector: 'app-show-appart',
  templateUrl: './show-appart.component.html',
  styleUrls: ['./show-appart.component.css']
})
export class ShowAppartComponent implements OnInit{
  id!:number
  residence: Residence ={
    "id": 1,
    "name": "El fel",
    "address": "Borj Cedria",
    "image": "../../assets/images/residence1.jpg"
  };
  constructor(
    private activatedRoute : ActivatedRoute,
    private appartService: AppartementServiceService
  ) {}
  Appart:Apartement[]=[]

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params["id"];

    this.appartService.getAppartById(this.id)
      .subscribe((data)=>{
        this.Appart.push( data as any)
        console.log(this.Appart);
      })
  }

}
