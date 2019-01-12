import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Add, AddNum} from '../actions';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{count: number}>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
  }

  addOne () {
    this.store.dispatch(new Add());
  }

  addNum() {
    this.store.dispatch(new AddNum(5));
  }

}
