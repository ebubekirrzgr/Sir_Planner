import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proje } from "../models/proje";
import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjeService {

  constructor(
    private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router
  ) { }
  path = "https://localhost:5001/api/";

  getProjeler(): Observable<Proje[]> {
    return this.httpClient.get<Proje[]>(this.path + "projeler")
  }
  getProjeById(id: number): Observable<Proje> {
    return this.httpClient.get<Proje>(this.path + "projeler/detail?id=" + id)
  }
  add(proje: any) {
    this.httpClient.post(this.path + "projeler/add", proje).subscribe(data => {
      this.alertifyService.success("Proje başarıyla eklendi.")

    });
    setTimeout(location.reload.bind(location), 2500);
  }
  delete(id: number) {
    this.httpClient.delete(this.path + "projeler/delete?id=" + id).subscribe(data => {
      this.alertifyService.success("Proje başarıyla silindi.")
    });
  }
  // update(id:number) {
  //   return this.httpClient.put(this.path + "projeler/update?id=" + id).subscribe(data => {
  //     this.alertifyService.success("Proje başarıyla güncellendi.")
  //   });
  // }

  // update(id:number){
  //   const endpointURL = "https://localhost:5001/api/projeler/update?id=" + id;
  //   return this.httpClient.put(endpointURL,id)
  // }

  update(id:number){

    
  }
}
