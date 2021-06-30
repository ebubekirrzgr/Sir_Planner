import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { Routes,RouterModule } from "@angular/router";
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { appRoutes } from "./routes";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KullanicilarComponent } from './kullanicilar/kullanicilar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KullanicilarTabloComponent } from './kullanicilar-tablo/kullanicilar-tablo.component';
import { LoginComponent } from './login-logout/login/login.component';
import { RegisterComponent } from './login-logout/register/register.component';
import { AuthService } from './services/auth.service';
import { ProjeComponent } from './proje/proje.component';
import { ProjeDetailComponent } from './proje/proje-detail/proje-detail.component';
import { ProjeAddComponent } from './proje/proje-add/proje-add.component';
import { AlertifyService } from "./services/alertify.service";
import { UserAddComponent } from './kullanicilar-tablo/user-add/user-add.component';
import { GorevlerComponent } from './gorevler/gorevler.component';
import { TaskAddComponent } from './gorevler/task-add/task-add.component';
import { KategorilerComponent } from './kategoriler/kategoriler.component';
import { CategoryAddComponent } from './kategoriler/category-add/category-add.component';
import { ProjeEditComponent } from './proje/proje-edit/proje-edit.component';
import { TakimlarComponent } from './takimlar/takimlar.component';
import { TeamAddComponent } from './takimlar/team-add/team-add.component';


const routes : Routes =[
  {path:"kullanicilar", component:KullanicilarTabloComponent},
  {path:"",redirectTo:"kullanicilar",pathMatch:"full"},
  {path:"kullanici",component:KullanicilarComponent},
  {path:"kullanici/:kullaniciId",component:KullanicilarComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    KullanicilarComponent,
    NavbarComponent,
    KullanicilarTabloComponent,
    LoginComponent,
    RegisterComponent,
    ProjeComponent,
    ProjeDetailComponent,
    ProjeAddComponent,
    UserAddComponent,
    GorevlerComponent,
    TaskAddComponent,
    KategorilerComponent,
    CategoryAddComponent,
    ProjeEditComponent,
    TakimlarComponent,
    TeamAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
