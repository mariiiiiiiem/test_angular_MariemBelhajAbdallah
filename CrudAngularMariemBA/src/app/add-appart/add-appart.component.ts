import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Residence} from "../../models/Residence";
import {Router} from "@angular/router";
import {AppartementServiceService} from "../services/appartement-service.service";

@Component({
  selector: 'app-add-appart',
  templateUrl: './add-appart.component.html',
  styleUrls: ['./add-appart.component.css']
})
export class AddAppartComponent implements OnInit{
  constructor(private router : Router,
  private appartService: AppartementServiceService) {
  }
  id!:number
  formAppart!:FormGroup


  residence: Residence ={
    "id": 1,
    "name": "El fel",
    "address": "Borj Cedria",
    "image": "../../assets/images/residence1.jpg"
  };


    ngOnInit(): void {
      this.formAppart= new FormGroup({
        apartNum:new FormControl('',Validators.required),
        description:new FormControl('',Validators.required),
        residence:new FormControl(this.residence,Validators.required)
      })
    }
  onSubmit() {
      console.log("adddd")
    this.appartService.addAppartement(this.formAppart.value)
      .subscribe(e =>{
        console.log(this.formAppart.value);
        this.router.navigate(['/apartment']);
      })
  }
}
