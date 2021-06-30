import { Component, OnInit } from '@angular/core';
import { Kategori } from "../models/kategori";
import { HttpClient } from '@angular/common/http';
import { KategoriService } from "../services/kategori.service";

@Component({
  selector: 'app-kategoriler',
  templateUrl: './kategoriler.component.html',
  styleUrls: ['./kategoriler.component.css'],
  providers:[KategoriService]
})

export class KategorilerComponent implements OnInit {

  constructor(private http: HttpClient, private kategoriService:KategoriService) { }

  path: string = "https://localhost:5001/api/kategoriler"
  kategoriler!: Kategori[] | any;

  ngOnInit(): void {
    this.getKategoriler();
  }
  getKategoriler() {
    this.http.get<Kategori[]>(this.path).subscribe(response => {
      this.kategoriler = response;
    })
  }
  delete(id:number){
    this.kategoriService.delete(id) ;
    setTimeout(location.reload.bind(location), 2000);
  }
}
