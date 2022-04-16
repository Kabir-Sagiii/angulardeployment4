import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.css']
})
export class ReduxComponent implements OnInit {
  public pizza:number = 0

  constructor(private store:Store<{reducer:{pizza:number}}>) { }

  ngOnInit(): void {
    this.store.pipe(select('reducer')).subscribe((store)=>{
      this.pizza = store.pizza
    })
  }

}
