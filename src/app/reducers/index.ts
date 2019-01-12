import {Action} from '@ngrx/store';
import { ActionTypes } from '../actions';

const DEFAULT_STATE = 0;

export function counterReducer (state = DEFAULT_STATE, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD:
      return state + 1;
    case ActionTypes.ADD_NUM:
      return state + action['payload'];
    default:
      return state;
  }
}
