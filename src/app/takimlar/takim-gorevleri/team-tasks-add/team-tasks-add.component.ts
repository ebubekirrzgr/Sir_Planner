import { Component, OnInit } from '@angular/core';
import { TakimGorevleri } from "../../../models/takim-gorevleri";
import { HttpClient } from '@angular/common/http';
import { TakimGorevleriService } from '../../../services/takim-gorevleri.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Gorev } from 'src/app/models/gorev';
import { Takim } from "../../../models/takim";
@Component({
  selector: 'app-team-tasks-add',
  templateUrl: './team-tasks-add.component.html',
  styleUrls: ['./team-tasks-add.component.css'],
  providers : [TakimGorevleriService]
})
export class TeamTasksAddComponent implements OnInit {

  constructor(   
    private takimGorevleriService: TakimGorevleriService,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  path: string = "https://localhost:5001/api/takimgorevleri";
  gpath:string="https://localhost:5001/api/gorevler";
  tpath:string="https://localhost:5001/api/takimlar"
  takimGorevleri!: TakimGorevleri[] | any; 
  gorevler!: Gorev []|any;
  takimlar!:Takim []|any;
  teamTaskAddForm!: FormGroup;

  createTeamTaskForm() {
    this.teamTaskAddForm = this.formBuilder.group({
      takim_id: ["", Validators.required],
      gorev_id: ["", Validators.required]
      
    })
  }

  ngOnInit(): void {
    this.createTeamTaskForm();  
    this.getGorevler() ;
    this.getTakimlar();
  }
 
  
  add() {
    if (this.teamTaskAddForm.valid) {
      this.takimGorevleri = Object.assign({}, this.teamTaskAddForm.value)
      this.takimGorevleriService.add(this.takimGorevleri)
      setTimeout(() => {
        this.router.navigate(['kullaniciGorevleri']);
      }, 2000);  //2s
    }
  }

  delete(id:number){
    this.takimGorevleriService.delete(id) ;
    setTimeout(location.reload.bind(location), 2000);
  }
   getGorevler() {
    this.http.get<TakimGorevleri[]>(this.gpath).subscribe(response => {
      this.gorevler = response;
    })
  }
  getTakimlar(){
    this.http.get<TakimGorevleri[]>(this.tpath).subscribe(response =>{
      this.takimlar =response;
    })
  }
}
