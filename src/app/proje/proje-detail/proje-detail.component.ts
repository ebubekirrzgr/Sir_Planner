import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProjeService } from 'src/app/services/proje.service';
import { Proje } from "../../models/proje";

@Component({
  selector: 'app-proje-detail',
  templateUrl: './proje-detail.component.html',
  styleUrls: ['./proje-detail.component.css'],
  providers:[ProjeService]
})
export class ProjeDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private projeService:ProjeService) { }
  proje!: Proje;
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getProjeById(params["id"])
    })
  }
  getProjeById(id: number){
    this.projeService.getProjeById(id).subscribe(data=>{
      this.proje = data;
    })
  }

}
