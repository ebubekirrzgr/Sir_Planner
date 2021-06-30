import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Takim } from "../models/takim";
import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TakimService {

  constructor(
  private httpClient: HttpClient,
  private alertifyService: AlertifyService,
  private router: Router
  
  ) { }
  path = "https://localhost:5001/api/";

  getTakimlar(): Observable<Takim[]> {
    return this.httpClient.get<Takim[]>(this.path + "takimlar")
  }
  getTakimById(id: number): Observable<Takim> {
    return this.httpClient.get<Takim>(this.path + "takimlar/detail?id=" + id)
  }
  add(takim: any ) {
    this.httpClient.post(this.path + "takimlar/add", takim).subscribe(data=> {
      this.alertifyService.success("Takım başarıyla eklendi.")
       
    });
  }
  delete(id: number) {
    this.httpClient.delete(this.path + "takimlar/delete?id=" + id).subscribe(data => {
      this.alertifyService.success("Takım başarıyla silindi.")
    });
  }




}
