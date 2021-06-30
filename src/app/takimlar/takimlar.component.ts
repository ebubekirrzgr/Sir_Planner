import { Component, OnInit } from '@angular/core';
import { Takim } from "../models/takim";
import { HttpClient } from '@angular/common/http';
import { TakimService } from '../services/takim.service';

@Component({
  selector: 'app-takimlar',
  templateUrl: './takimlar.component.html',
  styleUrls: ['./takimlar.component.css'],
  providers: [TakimService]
})

export class TakimlarComponent implements OnInit {

  constructor(private http: HttpClient,
    private takimService: TakimService) { }

  path: string = "https://localhost:5001/api/takimlar"
  takimlar!: Takim[] | any;

  ngOnInit(): void {
    this.getTakimlar();
  }
  getTakimlar(){
    this.http.get<Takim[]>(this.path).subscribe(response =>{
      this.takimlar =response;
    })
  }
  delete(id:number){
    this.takimService.delete(id) ;
    setTimeout(location.reload.bind(location), 2000);
  }

}
