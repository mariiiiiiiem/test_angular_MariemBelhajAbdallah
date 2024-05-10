import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShowroomServiceService} from "../services/showroom-service.service";

@Component({
  selector: 'app-add-showroom',
  templateUrl: './add-showroom.component.html',
  styleUrls: ['./add-showroom.component.css']
})
export class AddShowroomComponent implements OnInit{
  constructor(private router : Router,
              private showroomservice: ShowroomServiceService) {
  }
  id!:number
  formshowroom!:FormGroup


 /*

  matricule!:string;
  nom!: string;
  status!: boolean;*/

  ngOnInit(): void {
    this.formshowroom= new FormGroup({
      matricule:new FormControl("",[Validators.required,Validators.minLength(1),Validators.pattern("^[A-Z][a-zA-Z]*$")]),
      nom:new FormControl('',Validators.required),
      status:new FormControl(true,Validators.required),


    })
  }
  onSubmit() {
    console.log("adddd")
    this.showroomservice.addshowroo(this.formshowroom.value)
      .subscribe(e =>{
        console.log(this.formshowroom.value);
        this.router.navigate(['/showroom']);
      })
  }
  get matricule(){
    return this.formshowroom.get('matricule');
  }

}
