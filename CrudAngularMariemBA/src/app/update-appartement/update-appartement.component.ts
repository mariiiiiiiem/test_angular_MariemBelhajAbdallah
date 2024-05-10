import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppartementServiceService} from "../services/appartement-service.service";
import {Residence} from "../../models/Residence";
import {ActivatedRoute, Router} from "@angular/router";
import {Apartement} from "../../models/Apartement";

@Component({
  selector: 'app-update-appartement',
  templateUrl: './update-appartement.component.html',
  styleUrls: ['./update-appartement.component.css']
})
export class UpdateAppartementComponent implements OnInit{
  formAppart!:FormGroup
  id!:number | undefined
  appart!:Apartement[]

  residence: Residence ={
    "id": 1,
    "name": "El fel",
    "address": "Borj Cedria",
    "image": "../../assets/images/residence1.jpg"
  };


  ngOnInit(): void {


    this.id=this.activatedroute.snapshot.params['id']
    console.log(this.id)
    this.formAppart= new FormGroup({
      apartNum:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      residence:new FormControl(this.residence,Validators.required)
    })
    this.getById()
  }
  constructor(private service:AppartementServiceService ,private activatedroute:ActivatedRoute,private router:Router) {
  }
  getById(){
    this.service.getAppartById(this.id).subscribe(appartByid=>{
      this.appart=appartByid
      this.formAppart.patchValue(this.appart as any)

    })
  }

  update(){
    this.service.updateAppart(this.id,this.formAppart.value).subscribe(c=>{
this.router.navigate(['/apartment'])
    })


  }

}
