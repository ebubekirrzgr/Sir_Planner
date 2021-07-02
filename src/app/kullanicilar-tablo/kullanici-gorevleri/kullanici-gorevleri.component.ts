import { Component, OnInit } from '@angular/core';
import { KullaniciGorevleri } from "../../models/kullanici-gorevleri";
import { HttpClient } from '@angular/common/http';
import { KullaniciGorevleriService } from '../../services/kullanici-gorevleri.service';
import { Kullanici } from "../../models/kullanici";
import { Gorev } from 'src/app/models/gorev';


@Component({
  selector: 'app-kullanici-gorevleri',
  templateUrl: './kullanici-gorevleri.component.html',
  styleUrls: ['./kullanici-gorevleri.component.css'],
  providers:[KullaniciGorevleriService]
})
export class KullaniciGorevleriComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private kullaniciGorevleriService: KullaniciGorevleriService
  ) { }

  path: string = "https://localhost:5001/api/kullanicigorevleri";
  upath: string = "https://localhost:5001/api/kullanicilar";
  gpath:string="https://localhost:5001/api/gorevler";
  kullaniciGorevleri!: KullaniciGorevleri[] | any;
  kullanicilar!: Kullanici[]|any;
  gorevler!: Gorev []|any;
  
  ngOnInit(): void {
    this.getKullaniciGorevleri();
    this.getGorevler() ;
    this.getKullanicilar();
  }
  getKullanicilar(){
    this.http.get<KullaniciGorevleri[]>(this.upath).subscribe(response =>{
      this.kullanicilar =response;
    })
    
  }
  getGorevler() {
    this.http.get<KullaniciGorevleri[]>(this.gpath).subscribe(response => {
      this.gorevler = response;
    })
  }
  getKullaniciGorevleri(){
    this.http.get<KullaniciGorevleri[]>(this.path).subscribe(response =>{
      this.kullaniciGorevleri =response;
    })

  }
  delete(id:number){
    this.kullaniciGorevleriService.delete(id) ;
    setTimeout(location.reload.bind(location), 2000);
  }
  

}
