import { Component, OnInit } from '@angular/core';
import { GorevService } from 'src/app/services/gorev.service';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Gorev } from 'src/app/models/gorev';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css'],
  providers: [GorevService]
})
export class TaskAddComponent implements OnInit {constructor(
  private gorevService: GorevService,
  private formBuilder: FormBuilder,
  private router: Router              
  ) { }

gorev!: Gorev;
taskAddForm!: FormGroup;

createTaskForm() {
this.taskAddForm = this.formBuilder.group({
gorev_adi: ["", Validators.required],
gorev_aciklamasi: ["", Validators.required],
kategori_id: ["", Validators.required],
})
}
ngOnInit(): void {
this.createTaskForm();
}
add() {
if(this.taskAddForm.valid){
this.gorev = Object.assign({},this.taskAddForm.value)

this.gorevService.add(this.gorev)
setTimeout(() => {
  this.router.navigate(['gorevler']);
}, 2000);  //5s  

}
}
}
