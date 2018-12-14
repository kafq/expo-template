import { ActionTypes, Action } from './actions';
import { StoreModel } from './models'

const initialState: StoreModel = {
  isAppLoaded: false,
};

export function reducer(state: StoreModel = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.UPDATE_CONFIG:
      return {
        ...state,
        ...action.payload.updatedConfig,
      };
    default:
      return state;
  }
}
