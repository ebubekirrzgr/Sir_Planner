import { Component, OnInit } from '@angular/core';
import { KullaniciTakimlari } from "../../../models/kullanici-takimlari";
import { HttpClient } from '@angular/common/http';
import { KullaniciTakimlariService } from '../../../services/kullanici-takimlari.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Takim } from 'src/app/models/takim';
import { Kullanici } from "../../../models/kullanici";

@Component({
  selector: 'app-user-teams-add',
  templateUrl: './user-teams-add.component.html',
  styleUrls: ['./user-teams-add.component.css'],
  providers:[KullaniciTakimlariService]
})
export class UserTeamsAddComponent implements OnInit {

  constructor(
    private kullaniciTakimlariService: KullaniciTakimlariService,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

    path: string = "https://localhost:5001/api/kullanicitakimlari";
    gpath:string="https://localhost:5001/api/takimlar";
    tpath:string="https://localhost:5001/api/kullanicilar"
    kullaniciTakimlari!: KullaniciTakimlari[] | any; 
    takimlar!: Takim []|any;
    kullanicilar!:Kullanici []|any;
    userTaskAddForm!: FormGroup;
  
    createUserTaskForm() {
      this.userTaskAddForm = this.formBuilder.group({
        kullanici_id: ["", Validators.required],
        takim_id: ["", Validators.required]
        
      })
    }
  
    ngOnInit(): void {
      this.createUserTaskForm();  
      this.getTakimlar() ;
      this.getKullanicilar();
    }
   
    
    add() {
      if (this.userTaskAddForm.valid) {
        this.kullaniciTakimlari = Object.assign({}, this.userTaskAddForm.value)
        this.kullaniciTakimlariService.add(this.kullaniciTakimlari)
        setTimeout(() => {
          this.router.navigate(['kullaniciTakimlari']);
        }, 2000);  //2s
      }
    }
  
    delete(id:number){
      this.kullaniciTakimlariService.delete(id) ;
      setTimeout(location.reload.bind(location), 2000);
    }
     getTakimlar() {
      this.http.get<KullaniciTakimlari[]>(this.gpath).subscribe(response => {
        this.takimlar = response;
      })
    }
    getKullanicilar(){
      this.http.get<KullaniciTakimlari[]>(this.tpath).subscribe(response =>{
        this.kullanicilar =response;
      })
    }
  

}
