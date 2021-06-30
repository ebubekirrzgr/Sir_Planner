import { Component, OnInit } from '@angular/core';
import { ProjeService } from 'src/app/services/proje.service';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Proje } from 'src/app/models/proje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proje-add',
  templateUrl: './proje-add.component.html',
  styleUrls: ['./proje-add.component.css'],
  providers: [ProjeService]
})
export class ProjeAddComponent implements OnInit {

  constructor(private projeService: ProjeService,
              private formBuilder: FormBuilder ,
              private router: Router             
              ) { }

  proje!: Proje;
  projeAddForm!: FormGroup;

  createProjeForm() {
    this.projeAddForm = this.formBuilder.group({
      ad: ["", Validators.required],
      aciklamalar: ["", Validators.required]
    })
  }
  ngOnInit(): void {
    this.createProjeForm();
  }
  add() {
    if(this.projeAddForm.valid){
      this.proje = Object.assign({},this.projeAddForm.value)     
      this.projeService.add(this.proje)     
      setTimeout(() => {
        this.router.navigate(['projeler']);
      }, 2000);  //5s  

    }
  }
  

}
