import { ProjeComponent } from "./proje/proje.component";
import { Routes } from "@angular/router";
import { KullanicilarTabloComponent } from "./kullanicilar-tablo/kullanicilar-tablo.component";
import { ProjeDetailComponent } from "./proje/proje-detail/proje-detail.component";
import { ProjeAddComponent } from "./proje/proje-add/proje-add.component";
import { LoginComponent } from "./login-logout/login/login.component";
import { GorevlerComponent } from "./gorevler/gorevler.component";
import { TaskAddComponent } from "./gorevler/task-add/task-add.component";
import { UserAddComponent } from "./kullanicilar-tablo/user-add/user-add.component";
import { KategorilerComponent } from "./kategoriler/kategoriler.component";
import { CategoryAddComponent } from "./kategoriler/category-add/category-add.component";
import { ProjeEditComponent } from "./proje/proje-edit/proje-edit.component";
import { TakimlarComponent } from "./takimlar/takimlar.component";
import { TeamAddComponent } from "./takimlar/team-add/team-add.component";
import { TakimGorevleriComponent } from "./takimlar/takim-gorevleri/takim-gorevleri.component";
import { TeamTasksAddComponent } from "./takimlar/takim-gorevleri/team-tasks-add/team-tasks-add.component";
import { TakimProjeleriComponent } from "./takimlar/takim-projeleri/takim-projeleri.component";

export const appRoutes: Routes = [
    { path: "projeler", component: ProjeComponent },
    { path: "projeAdd", component: ProjeAddComponent },
    { path: "projeDetail/:id", component: ProjeDetailComponent },
    { path: "projeEdit/:id", component: ProjeEditComponent },

    { path: "gorevler", component: GorevlerComponent },
    { path: "taskAdd", component: TaskAddComponent },

    { path: "kategoriler", component: KategorilerComponent },
    { path: "categoryAdd", component: CategoryAddComponent },

    { path: "kullanicilar", component: KullanicilarTabloComponent },
    { path: "userAdd", component: UserAddComponent },

    { path: "takimlar", component: TakimlarComponent },
    { path: "teamAdd", component: TeamAddComponent },

    { path: "takimGorevleri", component: TakimGorevleriComponent },
    { path: "teamTaskAdd", component: TeamTasksAddComponent },
    
    { path: "takimProjeleri", component: TakimProjeleriComponent },
    

    { path: "giris", component: LoginComponent },

    { path: "**", redirectTo: "projeler", pathMatch: "full" }
]