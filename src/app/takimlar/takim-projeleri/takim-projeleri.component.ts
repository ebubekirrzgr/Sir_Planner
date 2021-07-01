import { Component, OnInit } from '@angular/core';
import { TakimProjeleri } from "../../models/takim-projeleri";
import { HttpClient } from '@angular/common/http';
import { TakimProjeleriService } from '../../services/takim-projeleri.service';
import { Takim } from "../../models/takim";
import { Proje } from 'src/app/models/proje';

@Component({
  selector: 'app-takim-projeleri',
  templateUrl: './takim-projeleri.component.html',
  styleUrls: ['./takim-projeleri.component.css'],
  providers:[TakimProjeleriService]
})
export class TakimProjeleriComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private takimProjeleriService: TakimProjeleriService  ) { }

    path: string = "https://localhost:5001/api/takimprojeleri";
    tpath: string = "https://localhost:5001/api/takimlar";
    ppath:string="https://localhost:5001/api/projeler";
    takimProjeleri!: TakimProjeleri[] | any;
    takimlar!: Takim[]|any;
    projeler!: Proje []|any;

  ngOnInit(): void {
    this.getTakimProjeleri();
    this.getProjeler() ;
    this.getTakimlar();
  }
  getTakimlar(){
    this.http.get<TakimProjeleri[]>(this.tpath).subscribe(response =>{
      this.takimlar =response;
    })
    
  }
  getProjeler() {
    this.http.get<TakimProjeleri[]>(this.ppath).subscribe(response => {
      this.projeler = response;
    })
  }
  getTakimProjeleri(){
    this.http.get<TakimProjeleri[]>(this.path).subscribe(response =>{
      this.takimProjeleri =response;
    })

  }
  delete(id:number){
    this.takimProjeleriService.delete(id) ;
    setTimeout(location.reload.bind(location), 2000);
  }
  

}
