import { Action } from '@ngrx/store';

export enum ActionTypes {
  ADD = 'increment',
  ADD_NUM = 'add_num',
  DEC = 'decrement',
}

export class Add implements Action {
  readonly type = ActionTypes.ADD;
}

export class AddNum implements Action {
  readonly type = ActionTypes.ADD_NUM;

  constructor( readonly payload: number ) {
  }
}
