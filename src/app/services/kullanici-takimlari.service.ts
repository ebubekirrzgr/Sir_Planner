import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kullanici } from "../models/kullanici";
import { Takim } from "../models/takim";
import { KullaniciTakimlari } from '../models/kullanici-takimlari';
import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class KullaniciTakimlariService {

  constructor(
    private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router
  ) { }
  path = "https://localhost:5001/api/";

  getKullaniciTakimlari(): Observable<KullaniciTakimlari[]> {
    return this.httpClient.get<KullaniciTakimlari[]>(this.path + "kullanicitakimleri")
  }
  getKullanicilar(): Observable<Kullanici[]> {
    return this.httpClient.get<Kullanici[]>(this.path + "kullanicilar")
  }
  getTakimlar(): Observable<Takim[]> {
    return this.httpClient.get<Takim[]>(this.path + "takimler")
  }
  getKullaniciTakimlariById(id: number): Observable<KullaniciTakimlari> {
    return this.httpClient.get<KullaniciTakimlari>(this.path + "kullanicitakimleri/detail?id=" + id)
  }
  getKullaniciById(kullanici_id: number): Observable<KullaniciTakimlari> {
    return this.httpClient.get<KullaniciTakimlari>(this.path + "kullanici/detail?id=" + kullanici_id)
  }
  getTakimById(takim_id: number): Observable<KullaniciTakimlari> {
    return this.httpClient.get<KullaniciTakimlari>(this.path + "takim/detail?id=" + takim_id)
  }
  add(kullaniciTakimi: any ) {
    this.httpClient.post(this.path + "kullanicitakimlari/add", kullaniciTakimi).subscribe(data=> {
      this.alertifyService.success("Kullanıcı Takimi başarıyla eklendi.")
       
    });
  }
  delete(id: number) {
    this.httpClient.delete(this.path + "kullanicitakimlari/delete?id=" + id).subscribe(data => {
      this.alertifyService.success("Kullanıcı Takimi başarıyla silindi.")
    });
  }
}
