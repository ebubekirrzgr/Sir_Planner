import { Component, OnInit } from '@angular/core';
import { Kullanici } from './kullanici';
import { HttpClient} from '@angular/common/http';
import { KullaniciService } from "../services/kullanici.service";

@Component({
  selector: 'app-kullanicilar-tablo',
  templateUrl: './kullanicilar-tablo.component.html',
  styleUrls: ['./kullanicilar-tablo.component.css'],
  providers:[KullaniciService]
})

export class KullanicilarTabloComponent implements OnInit {

  constructor(private http:HttpClient,private kullaniciService:KullaniciService) { }

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
  delete(id:number){
    this.kullaniciService.delete(id) ;
    setTimeout(location.reload.bind(location), 1500);
  }

}
