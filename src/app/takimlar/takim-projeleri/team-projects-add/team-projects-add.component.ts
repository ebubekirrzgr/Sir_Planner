import { Component, OnInit } from '@angular/core';
import { TakimProjeleri } from "../../../models/takim-projeleri";
import { HttpClient } from '@angular/common/http';
import { TakimProjeleriService } from '../../../services/takim-projeleri.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Proje } from 'src/app/models/proje';
import { Takim } from "../../../models/takim";

@Component({
  selector: 'app-team-projects-add',
  templateUrl: './team-projects-add.component.html',
  styleUrls: ['./team-projects-add.component.css'],
  providers:[TakimProjeleriService]
})
export class TeamProjectsAddComponent implements OnInit {

  constructor(
    private takimProjeleriService: TakimProjeleriService,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }
  path: string = "https://localhost:5001/api/takimgorevleri";
  ppath:string="https://localhost:5001/api/projeler";
  tpath:string="https://localhost:5001/api/takimlar"
  takimProjeleri!: TakimProjeleri[] | any; 
  projeler!: Proje []|any;
  takimlar!:Takim []|any;
  teamProjectAddForm!: FormGroup;

  createTeamProjectForm() {
    this.teamProjectAddForm = this.formBuilder.group({
      takim_id: ["", Validators.required],
      proje_id: ["", Validators.required]
      
    })
  }


  ngOnInit(): void {
    this.createTeamProjectForm();  
    this.getProjeler() ;
    this.getTakimlar();
  }
  add() {
    if (this.teamProjectAddForm.valid) {
      this.takimProjeleri = Object.assign({}, this.teamProjectAddForm.value)
      this.takimProjeleriService.add(this.takimProjeleri)
      setTimeout(() => {
        this.router.navigate(['kullaniciProjeleri']);
      }, 2000);  //2s
    }
  }

  delete(id:number){
    this.takimProjeleriService.delete(id) ;
    setTimeout(location.reload.bind(location), 2000);
  }
  getProjeler() {
    this.http.get<TakimProjeleri[]>(this.ppath).subscribe(response => {
      this.projeler = response;
    })
  }
  getTakimlar(){
    this.http.get<TakimProjeleri[]>(this.tpath).subscribe(response =>{
      this.takimlar =response;
    })
  }

}
