import { Component, OnInit } from '@angular/core';
import { Proje } from "../models/proje";
import { ProjeService } from '../services/proje.service';


@Component({
  selector: 'app-proje',
  templateUrl: './proje.component.html',
  styleUrls: ['./proje.component.css'],
  providers:[ProjeService]
})
export class ProjeComponent implements OnInit {

  constructor(private projeService:ProjeService) { }
  projeler:Proje[] | undefined

  ngOnInit(): void {
    this.projeService.getProjeler().subscribe(data => {
      this.projeler = data;
    })
  }
  // delete() {    
  //     this.projeler = Object.assign({}, this.projeler)
  //     this.projeService.add(this.projeler)    
  // }
 
  delete(id:number){
    this.projeService.delete(id) ;
    setTimeout(location.reload.bind(location), 2000);
  }

 
}
