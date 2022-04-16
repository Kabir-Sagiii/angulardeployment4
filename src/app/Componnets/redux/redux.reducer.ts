import {createReducer, on} from '@ngrx/store'
import { buyPizza } from './redux.actions'
let data = {
    pizza:99
}
export const reducer = createReducer(data,on(buyPizza,(store)=>{
      return {
        pizza:store.pizza - 1
    }
}))