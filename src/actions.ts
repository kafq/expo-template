import { Dispatch } from 'redux';

export enum ActionTypes {
  UPDATE_CONFIG = 'UPDATE_CONFIG',
}

export interface UpdateConfigAction {
  type: ActionTypes.UPDATE_CONFIG;
  payload: {
    updatedConfig: any,
  }
}

export function updateConfig(updatedConfig: any): UpdateConfigAction {
  return {
    type: ActionTypes.UPDATE_CONFIG,
    payload: {
      updatedConfig,
    },
  };
}

export function initializeApp() {
  return async (dispatch: Dispatch) => {
    dispatch(updateConfig({ isAppLoaded: true }))
  };
}

export type Action = UpdateConfigAction
