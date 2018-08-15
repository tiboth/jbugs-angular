import { Component, OnInit } from '@angular/core';
import {DateproviderService} from '../dateprovider.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  myName = 'Both Tihamer';
  displayDate: string;

  constructor(public dateService: DateproviderService) { }

  ngOnInit() {
    this.dateService.getCurrentDate().subscribe({
      next: (value) => { this.displayDate = value; },
    });
  }

}
