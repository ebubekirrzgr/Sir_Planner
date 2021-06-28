import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../css/css/util.css',
              '../css/css/main.css'  ]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
                ) { }

  ngOnInit(): void {
  }
/*
  onLogin(loginForm: NgForm){
    console.log(loginForm.value)
    const token = this.authService.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token' , token.userName)
      console.log('Giriş Başarılı');
    }else{
      console.log('Giriş Başarısız');
    }

  }
  */

}
