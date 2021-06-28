import { Component, OnInit } from '@angular/core';
import { Gorev } from "../models/gorev";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gorevler',
  templateUrl: './gorevler.component.html',
  styleUrls: ['./gorevler.component.css']
})

export class GorevlerComponent implements OnInit {

  constructor(private http: HttpClient) { }

  path: string = "https://localhost:5001/api/gorevler"
  gorevler!: Gorev[] | any;

  ngOnInit(): void {
    this.getGorevler();
  }
  getGorevler() {
    this.http.get<Gorev[]>(this.path).subscribe(response => {
      this.gorevler = response;
    })
  }
}
