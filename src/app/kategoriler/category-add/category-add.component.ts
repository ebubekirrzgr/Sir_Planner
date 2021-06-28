import { Component, OnInit } from '@angular/core';
import { KategoriService } from 'src/app/services/kategori.service';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Kategori } from 'src/app/models/kategori';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css'],
  providers: [KategoriService]
})
export class CategoryAddComponent implements OnInit {constructor(private kategoriService: KategoriService,
  private formBuilder: FormBuilder              
  ) { }

kategori!: Kategori;
categoryAddForm!: FormGroup;

createCategoryForm() {
this.categoryAddForm = this.formBuilder.group({
kategori_adi: ["", Validators.required],
})
}
ngOnInit(): void {
this.createCategoryForm();
}
add() {
if(this.categoryAddForm.valid){
this.kategori = Object.assign({},this.categoryAddForm.value)

this.kategoriService.add(this.kategori)

}
}
}
