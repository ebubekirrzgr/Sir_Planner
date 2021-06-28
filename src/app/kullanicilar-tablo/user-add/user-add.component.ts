import { Component, OnInit } from '@angular/core';
import { KullaniciService } from 'src/app/services/kullanici.service';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Kullanici } from 'src/app/models/kullanici';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
  providers: [KullaniciService]
})
export class UserAddComponent implements OnInit {
    constructor(private kullaniciService: KullaniciService,
      private formBuilder: FormBuilder
    ) { }

  kullanici!: Kullanici;
  userAddForm!: FormGroup;

  createUserForm() {
    this.userAddForm = this.formBuilder.group({
      ad: ["", Validators.required],
      soyad: ["", Validators.required],
      eposta: ["", Validators.required],
      kullanici_adi: ["", Validators.required],
    })
  }
  ngOnInit(): void {
    this.createUserForm();
  }
  add() {
    if (this.userAddForm.valid) {
      this.kullanici = Object.assign({}, this.userAddForm.value)
      this.kullaniciService.add(this.kullanici)
    }
  }

}
