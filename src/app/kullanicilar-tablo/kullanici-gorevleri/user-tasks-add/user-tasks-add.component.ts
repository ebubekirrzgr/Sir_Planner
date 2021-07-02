import { Component, OnInit } from '@angular/core';
import { KullaniciGorevleri } from "../../../models/kullanici-gorevleri";
import { HttpClient } from '@angular/common/http';
import { KullaniciGorevleriService } from '../../../services/kullanici-gorevleri.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Gorev } from 'src/app/models/gorev';
import { Kullanici } from "../../../models/kullanici";

@Component({
  selector: 'app-user-tasks-add',
  templateUrl: './user-tasks-add.component.html',
  styleUrls: ['./user-tasks-add.component.css'],
  providers:[KullaniciGorevleriService]
})
export class UserTasksAddComponent implements OnInit {

  constructor(
    private kullaniciGorevleriService: KullaniciGorevleriService,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  path: string = "https://localhost:5001/api/kullanicigorevleri";
  gpath:string="https://localhost:5001/api/gorevler";
  tpath:string="https://localhost:5001/api/kullanicilar"
  kullaniciGorevleri!: KullaniciGorevleri[] | any; 
  gorevler!: Gorev []|any;
  kullanicilar!:Kullanici []|any;
  userTaskAddForm!: FormGroup;

  createUserTaskForm() {
    this.userTaskAddForm = this.formBuilder.group({
      kullanici_id: ["", Validators.required],
      gorev_id: ["", Validators.required]
      
    })
  }

  ngOnInit(): void {
    this.createUserTaskForm();  
    this.getGorevler() ;
    this.getKullanicilar();
  }
 
  
  add() {
    if (this.userTaskAddForm.valid) {
      this.kullaniciGorevleri = Object.assign({}, this.userTaskAddForm.value)
      this.kullaniciGorevleriService.add(this.kullaniciGorevleri)
      setTimeout(() => {
        this.router.navigate(['kullaniciGorevleri']);
      }, 2000);  //2s
    }
  }

  delete(id:number){
    this.kullaniciGorevleriService.delete(id) ;
    setTimeout(location.reload.bind(location), 2000);
  }
   getGorevler() {
    this.http.get<KullaniciGorevleri[]>(this.gpath).subscribe(response => {
      this.gorevler = response;
    })
  }
  getKullanicilar(){
    this.http.get<KullaniciGorevleri[]>(this.tpath).subscribe(response =>{
      this.kullanicilar =response;
    })
  }

}
