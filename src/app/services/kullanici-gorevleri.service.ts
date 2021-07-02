import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kullanici } from "../models/kullanici";
import { Gorev } from "../models/gorev";
import { KullaniciGorevleri } from '../models/kullanici-gorevleri';
import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class KullaniciGorevleriService {

  constructor(
    private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router) { }
    path = "https://localhost:5001/api/";

    getKullaniciGorevleri(): Observable<KullaniciGorevleri[]> {
      return this.httpClient.get<KullaniciGorevleri[]>(this.path + "kullanicigorevleri")
    }
    getKullanicilar(): Observable<Kullanici[]> {
      return this.httpClient.get<Kullanici[]>(this.path + "kullanicilar")
    }
    getGorevler(): Observable<Gorev[]> {
      return this.httpClient.get<Gorev[]>(this.path + "gorevler")
    }
    getKullaniciGorevleriById(id: number): Observable<KullaniciGorevleri> {
      return this.httpClient.get<KullaniciGorevleri>(this.path + "kullanicigorevleri/detail?id=" + id)
    }
    getKullaniciById(kullanici_id: number): Observable<KullaniciGorevleri> {
      return this.httpClient.get<KullaniciGorevleri>(this.path + "kullanici/detail?id=" + kullanici_id)
    }
    getGorevById(gorev_id: number): Observable<KullaniciGorevleri> {
      return this.httpClient.get<KullaniciGorevleri>(this.path + "gorev/detail?id=" + gorev_id)
    }
    add(kullaniciGorevi: any ) {
      this.httpClient.post(this.path + "kullanicigorevleri/add", kullaniciGorevi).subscribe(data=> {
        this.alertifyService.success("Kullanıcı Görevi başarıyla eklendi.")
         
      });
    }
    delete(id: number) {
      this.httpClient.delete(this.path + "kullanicigorevleri/delete?id=" + id).subscribe(data => {
        this.alertifyService.success("Kullanıcı Görevi başarıyla silindi.")
      });
    }

}
