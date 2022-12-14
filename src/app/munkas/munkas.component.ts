import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-munkas',
  templateUrl: './munkas.component.html',
  styleUrls: ['./munkas.component.scss']
})
export class MunkasComponent implements OnInit {
  employees !: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.api.getEmployees().subsrible({
      next: (data: any) => {
        console.log(data); 
        this.employees = data;
      },
      error: (err: any) => {
        console.log(err);
        console.log('Hiba! Lekérés sikertelen!');
      }
    });
  }
}
