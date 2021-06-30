import { Component, OnInit } from '@angular/core';
import { ProjeService } from 'src/app/services/proje.service';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Proje } from 'src/app/models/proje';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-proje-edit',
  templateUrl: './proje-edit.component.html',
  styleUrls: ['./proje-edit.component.css'],
  providers:[ProjeService]
})
export class ProjeEditComponent implements OnInit {

  constructor(private projeService: ProjeService,
              private formBuilder: FormBuilder,
              private activatedRoute:ActivatedRoute

  ) { }

  proje!: Proje;
  projeEditForm!: FormGroup;

  editProjeForm() {
    this.projeEditForm = this.formBuilder.group({
      ad: ["", Validators.required],
      aciklamalar: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this.editProjeForm();
    
    this.activatedRoute.params.subscribe(params=>{
      this.getProjeById(params["id"])
    })
  }
  getProjeById(id: number){
    this.projeService.getProjeById(id).subscribe(data=>{
      this.proje = data;
    })
  }
  // edit() {
  //   if(this.projeEditForm.valid){
  //     this.proje = Object.assign({},this.projeEditForm.value)    
  //     this.projeService.update(this.proje.id)       

  //   }
  // }  

  
  


  
}

