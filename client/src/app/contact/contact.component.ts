import { Component, OnInit } from '@angular/core';
import {MainService} from "../_services/main.service";
import {error} from "util";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private mainService: MainService
  ) {
  }

  jsonData={"heroesUrl":'',"textfile":''};

  ngOnInit() {
  }

  getJsonData() {
     this.mainService.getSampleJson().subscribe(data  => {
        this.jsonData = {
          heroesUrl: data[1]['heroes'],
          textfile:  data[1]['textfile']};
    });
    }


}
