import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ccomp',
  templateUrl: './ccomp.component.html',
  styleUrls: ['./ccomp.component.css']
})
export class CcompComponent implements OnInit {
 @Input() cref:string = ""
  constructor() { }

  ngOnInit(): void {
    console.log("hiiiiiii")
  }
  ngDoCheck() {
    console.log("Child----->changing on every change")
  }

  ngOnChanges(c:any) {
    console.log("tr")
    console.log(c.cref.currentValue)
  }

}
