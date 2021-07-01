import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Takim } from "../models/takim";
import { Gorev } from "../models/gorev";
import { TakimGorevleri } from '../models/takim-gorevleri';
import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TakimGorevleriService {

  constructor(
    private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router) { }

    path = "https://localhost:5001/api/";

  getTakimGorevleri(): Observable<TakimGorevleri[]> {
    return this.httpClient.get<TakimGorevleri[]>(this.path + "takimgorevleri")
  }
  getTakimlar(): Observable<Takim[]> {
    return this.httpClient.get<Takim[]>(this.path + "takimlar")
  }
  getGorevler(): Observable<Gorev[]> {
    return this.httpClient.get<Gorev[]>(this.path + "gorevler")
  }
  getTakimGorevleriById(id: number): Observable<TakimGorevleri> {
    return this.httpClient.get<TakimGorevleri>(this.path + "takimgorevleri/detail?id=" + id)
  }
  getTakimById(takim_id: number): Observable<TakimGorevleri> {
    return this.httpClient.get<TakimGorevleri>(this.path + "takim/detail?id=" + takim_id)
  }
  getGorevById(gorev_id: number): Observable<TakimGorevleri> {
    return this.httpClient.get<TakimGorevleri>(this.path + "gorev/detail?id=" + gorev_id)
  }
  add(takimGorevi: any ) {
    this.httpClient.post(this.path + "takimgorevleri/add", takimGorevi).subscribe(data=> {
      this.alertifyService.success("Takım Görevi başarıyla eklendi.")
       
    });
  }
  delete(id: number) {
    this.httpClient.delete(this.path + "takimgorevleri/delete?id=" + id).subscribe(data => {
      this.alertifyService.success("Takım Görevi başarıyla silindi.")
    });
  }
}
