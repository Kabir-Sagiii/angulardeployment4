import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pcomp',
  templateUrl: './pcomp.component.html',
  styleUrls: ['./pcomp.component.css']
})
export class PcompComponent implements OnInit {
   pdata:any;
  constructor() { }

  ngOnInit(): void {
    console.log("parent ngonit")
    this.pdata = "No data"
  }
  ngDoCheck() {
    console.log("changing on every change")
  }
  getData(v:any) {
      this.pdata = v
  }
}
