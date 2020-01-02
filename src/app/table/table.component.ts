import { Component, OnInit } from '@angular/core';
import { GetdetailsfromsevService } from '../getdetailsfromsev.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  storeData: any;
  rawJson: any;

  constructor(private getdetailsfromsevService: GetdetailsfromsevService) { }

  ngOnInit() {
    this.details()
    setInterval(() => this.details() , 10000)
  }

  details() {
    this.getdetailsfromsevService.GetDetails().subscribe(resData => {
      console.log(resData)
      this.storeData = resData['hits']
    })
  }

  popupmodel(select) {
    this.rawJson = select;
  }
}
