import { Component, OnInit } from '@angular/core';
import { TakimGorevleri } from "../../models/takim-gorevleri";
import { HttpClient } from '@angular/common/http';
import { TakimGorevleriService } from '../../services/takim-gorevleri.service';
import { TakimService } from '../../services/takim.service';
import { Takim } from "../../models/takim";

@Component({
  selector: 'app-takim-gorevleri',
  templateUrl: './takim-gorevleri.component.html',
  styleUrls: ['./takim-gorevleri.component.css'],
  providers:[TakimGorevleriService]
})
export class TakimGorevleriComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private takimGorevleriService: TakimGorevleriService) { }

  path: string = "https://localhost:5001/api/takimgorevleri";
  tpath: string = "https://localhost:5001/api/takimlar";
  takimGorevleri!: TakimGorevleri[] | any;
  takimlar!: Takim[]|any;

  ngOnInit(): void {
    this.getTakimGorevleri();
  }
  getTakimlar(){
    this.http.get<Takim[]>(this.tpath).subscribe(response =>{
      this.takimlar =response;
    })
  }
  getTakimGorevleri(){
    this.http.get<TakimGorevleri[]>(this.path).subscribe(response =>{
      this.takimGorevleri =response;
    })
  }
  delete(id:number){
    this.takimGorevleriService.delete(id) ;
    setTimeout(location.reload.bind(location), 2000);
  }

}
