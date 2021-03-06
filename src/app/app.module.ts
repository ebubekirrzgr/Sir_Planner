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
import { TakimGorevleriComponent } from './takimlar/takim-gorevleri/takim-gorevleri.component';
import { TeamTasksAddComponent } from './takimlar/takim-gorevleri/team-tasks-add/team-tasks-add.component';
import { TakimProjeleriComponent } from './takimlar/takim-projeleri/takim-projeleri.component';
import { TeamProjectsAddComponent } from './takimlar/takim-projeleri/team-projects-add/team-projects-add.component';
import { KullaniciGorevleriComponent } from './kullanicilar-tablo/kullanici-gorevleri/kullanici-gorevleri.component';
import { UserTasksAddComponent } from './kullanicilar-tablo/kullanici-gorevleri/user-tasks-add/user-tasks-add.component';
import { KullaniciTakimlariComponent } from './kullanicilar-tablo/kullanici-takimlari/kullanici-takimlari.component';
import { UserTeamsAddComponent } from './kullanicilar-tablo/kullanici-takimlari/user-teams-add/user-teams-add.component';
import { AnaSayfaComponent } from './ana-sayfa/ana-sayfa/ana-sayfa.component';




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
    TeamAddComponent,
    TakimGorevleriComponent,
    TeamTasksAddComponent,
    TakimProjeleriComponent,
    TeamProjectsAddComponent,
    KullaniciGorevleriComponent,
    UserTasksAddComponent,
    KullaniciTakimlariComponent,
    UserTeamsAddComponent,
    AnaSayfaComponent,
   
    
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
