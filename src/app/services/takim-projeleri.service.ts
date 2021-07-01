import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Takim } from "../models/takim";
import { Proje } from "../models/proje";
import { TakimProjeleri } from '../models/takim-projeleri';
import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TakimProjeleriService {

  constructor(
    private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router
  ) { }
  path = "https://localhost:5001/api/";
  
  getTakimProjeleri(): Observable<TakimProjeleri[]> {
    return this.httpClient.get<TakimProjeleri[]>(this.path + "takimprojeleri")
  }
  getTakimlar(): Observable<Takim[]> {
    return this.httpClient.get<Takim[]>(this.path + "takimlar")
  }
  getProjeler(): Observable<Proje[]> {
    return this.httpClient.get<Proje[]>(this.path + "projeler")
  }
  getTakimProjeleriById(id: number): Observable<TakimProjeleri> {
    return this.httpClient.get<TakimProjeleri>(this.path + "TakimProjeleri/detail?id=" + id)
  }
  getTakimById(takim_id: number): Observable<TakimProjeleri> {
    return this.httpClient.get<TakimProjeleri>(this.path + "takim/detail?id=" + takim_id)
  }
  getProjeById(proje_id: number): Observable<TakimProjeleri> {
    return this.httpClient.get<TakimProjeleri>(this.path + "projeler/detail?id=" + proje_id)
  }
  add(takimProjesi: any ) {
    this.httpClient.post(this.path + "TakimProjeleri/add", takimProjesi).subscribe(data=> {
      this.alertifyService.success("Takım Projesi başarıyla eklendi.")
       
    });
  }
  delete(id: number) {
    this.httpClient.delete(this.path + "TakimProjeleri/delete?id=" + id).subscribe(data => {
      this.alertifyService.success("Takım Projesi başarıyla silindi.")
    });
  }
}
