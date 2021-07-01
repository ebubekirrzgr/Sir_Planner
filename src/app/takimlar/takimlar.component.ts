import { Component, OnInit } from '@angular/core';
import { Takim } from "../models/takim";
import { HttpClient } from '@angular/common/http';
import { TakimService } from '../services/takim.service';
import { Gorev } from "../models/gorev";

@Component({
  selector: 'app-takimlar',
  templateUrl: './takimlar.component.html',
  styleUrls: ['./takimlar.component.css'],
  providers: [TakimService]
})

export class TakimlarComponent implements OnInit {

  constructor(private http: HttpClient,
    private takimService: TakimService) { }

  path: string = "https://localhost:5001/api/takimlar";
  gpath: string = "https://localhost:5001/api/gorevler";
  takimlar!: Takim[] | any;
  gorevler!: Gorev[] | any;

  ngOnInit(): void {
    this.getTakimlar();
    this.getGorevler();
  }
  getTakimlar(){
    this.http.get<Takim[]>(this.path).subscribe(response =>{
      this.takimlar =response;
    })
  }
  getGorevler() {
    this.http.get<Gorev[]>(this.path).subscribe(response => {
      this.gorevler = response;
    })
  }
  delete(id:number){
    this.takimService.delete(id) ;
    setTimeout(location.reload.bind(location), 2000);
  }

}
