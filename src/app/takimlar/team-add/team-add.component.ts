import { Component, OnInit } from '@angular/core';
import { TakimService } from 'src/app/services/takim.service';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Takim } from 'src/app/models/takim';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.css'],
  providers: [TakimService]
})
export class TeamAddComponent implements OnInit {
  constructor(
    private takimService: TakimService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  takim!:Takim;
  teamAddForm!: FormGroup;

  createTeamForm() {
    this.teamAddForm = this.formBuilder.group({
      takim_adi: ["", Validators.required]     
    })
  }

  ngOnInit(): void {
    this.createTeamForm();
  }
  add() {
    if (this.teamAddForm.valid) {
      this.takim = Object.assign({}, this.teamAddForm.value)

      this.takimService.add(this.takim)
      setTimeout(() => {
        this.router.navigate(['takimlar']);
      }, 2000);  //5s  

    }
  }

}
