import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kullanici } from "../models/kullanici";
import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class KullaniciService {constructor(

  private httpClient: HttpClient,
  private alertifyService: AlertifyService,
  private router: Router
  ) { }
path = "https://localhost:5001/api/";

getKullanicilar(): Observable<Kullanici[]> {
  return this.httpClient.get<Kullanici[]>(this.path + "kullanicilar")
}
getKullaniciById(id: number): Observable<Kullanici> {
  return this.httpClient.get<Kullanici>(this.path + "kullanicilar/detail?id=" + id)
}
add(kullanici: any ) {
  this.httpClient.post(this.path + "kullanicilar/add", kullanici).subscribe(data=> {
    this.alertifyService.success("Kullanıcı başarıyla eklendi.")
     
  });
}
}
