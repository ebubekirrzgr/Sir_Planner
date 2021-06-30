import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kategori } from "../models/kategori";
import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class KategoriService {constructor(

  private httpClient: HttpClient,
  private alertifyService: AlertifyService,
  private router: Router
  ) { }
path = "https://localhost:5001/api/";

getKategoriler(): Observable<Kategori[]> {
  return this.httpClient.get<Kategori[]>(this.path + "kategoriler")
}
getKategoriById(id: number): Observable<Kategori> {
  return this.httpClient.get<Kategori>(this.path + "kategoriler/detail?id=" + id)
}
add(kategori: any ) {
  this.httpClient.post(this.path + "kategoriler/add", kategori).subscribe(data=> {
    this.alertifyService.success("Kategori başarıyla eklendi.")
     
  });
}
delete(id: number) {
  this.httpClient.delete(this.path + "kategoriler/delete?id=" + id).subscribe(data => {
    this.alertifyService.success("Kategori başarıyla silindi.")
  });
}
}
