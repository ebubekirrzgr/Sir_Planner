import { Component, OnInit } from '@angular/core';
import { KullaniciTakimlari } from "../../models/kullanici-takimlari";
import { HttpClient } from '@angular/common/http';
import { KullaniciTakimlariService } from '../../services/kullanici-takimlari.service';
import { Kullanici } from "../../models/kullanici";
import { Takim } from 'src/app/models/takim';

@Component({
  selector: 'app-kullanici-takimlari',
  templateUrl: './kullanici-takimlari.component.html',
  styleUrls: ['./kullanici-takimlari.component.css'],
  providers:[KullaniciTakimlariService]
})
export class KullaniciTakimlariComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private kullaniciTakimlariService: KullaniciTakimlariService
  ) { }

  path: string = "https://localhost:5001/api/kullanicitakimlari";
  upath: string = "https://localhost:5001/api/kullanicilar";
  tpath:string="https://localhost:5001/api/takimlar";
  kullaniciTakimlari!: KullaniciTakimlari[] | any;
  kullanicilar!: Kullanici[]|any;
  takimlar!: Takim []|any;

  ngOnInit(): void {
    this.getKullaniciTakimlari();
    this.getTakimlar() ;
    this.getKullanicilar();
  }
  getKullanicilar(){
    this.http.get<KullaniciTakimlari[]>(this.upath).subscribe(response =>{
      this.kullanicilar =response;
    })
    
  }
  getTakimlar() {
    this.http.get<KullaniciTakimlari[]>(this.tpath).subscribe(response => {
      this.takimlar = response;
    })
  }
  getKullaniciTakimlari(){
    this.http.get<KullaniciTakimlari[]>(this.path).subscribe(response =>{
      this.kullaniciTakimlari =response;
    })

  }
  delete(id:number){
    this.kullaniciTakimlariService.delete(id) ;
    setTimeout(location.reload.bind(location), 2000);
  }

}
