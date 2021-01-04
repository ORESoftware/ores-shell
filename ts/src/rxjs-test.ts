
import * as rx from 'rxjs';
import * as op from 'rxjs/operator'
import {switchMap} from "rxjs/operators";
import {Observable} from "rxjs";

rx.of(null).pipe(
  switchMap(v => {
    return new Observable(o => {
      o.next(1);
  })})
).subscribe(v => {
  console.log(v);
})

console.log('boop')