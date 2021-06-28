import { Component, OnInit } from '@angular/core';
import { Kategori } from "../models/kategori";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kategoriler',
  templateUrl: './kategoriler.component.html',
  styleUrls: ['./kategoriler.component.css']
})

export class KategorilerComponent implements OnInit {

  constructor(private http: HttpClient) { }

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
}
