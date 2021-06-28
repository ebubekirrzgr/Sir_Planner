import { Component, OnInit } from '@angular/core';
import { Kullanici } from './kullanici';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-kullanicilar-tablo',
  templateUrl: './kullanicilar-tablo.component.html',
  styleUrls: ['./kullanicilar-tablo.component.css']
})

export class KullanicilarTabloComponent implements OnInit {

  constructor(private http:HttpClient) { }

  path:string="https://localhost:5001/api/kullanicilar"
  kullanicilar :Kullanici[] | any;

  ngOnInit(): void {
    this.getKullanicilar();
  }
  getKullanicilar(){
    this.http.get<Kullanici[]>(this.path).subscribe(response => {
      this.kullanicilar = response;
    })
  }

}
