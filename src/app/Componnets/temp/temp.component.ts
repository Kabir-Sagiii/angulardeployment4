import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  data:any;
  constructor(private http:HttpClient) { }

  getData():any {
    this.http.get("https://gist.githubusercontent.com/Kabir-Sagi/721f6288db006d20914c7363f6c8c230/raw/6125a036dd72dd27ae3c5fe2100b873d97e58994/gistfile1.txt").subscribe((d:any)=>{
      console.log(d.results)
      this.data = d.results
   })
  }
  hideData() {
    this.data = []
  }

  ngOnInit(): void {
   
  }

}
