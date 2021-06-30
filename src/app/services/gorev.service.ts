import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gorev } from "../models/gorev";
import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class GorevService {constructor(

  private httpClient: HttpClient,
  private alertifyService: AlertifyService,
  private router: Router
  ) { }
path = "https://localhost:5001/api/";

getGorevler(): Observable<Gorev[]> {
  return this.httpClient.get<Gorev[]>(this.path + "gorevler")
}
getGorevById(id: number): Observable<Gorev> {
  return this.httpClient.get<Gorev>(this.path + "gorevler/detail?id=" + id)
}
add(gorev: any ) {
  this.httpClient.post(this.path + "gorevler/add", gorev).subscribe(data=> {
    this.alertifyService.success("Gorev başarıyla eklendi.")
     
  });
}
delete(id: number) {
  this.httpClient.delete(this.path + "gorevler/delete?id=" + id).subscribe(data => {
    this.alertifyService.success("Gorev başarıyla silindi.")
  });
}
}
