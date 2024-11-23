import { AlertActionType } from '../core/enums';
import { AlertAction } from '../core/provider';
import { AlertStruct } from '../core/struct';

function setAlertState(_state: AlertStruct, action: AlertAction): AlertStruct {
  switch (action.type) {
    case AlertActionType.SHOW:
      return {
        type: action.payload.type,
        title: action.payload.title,
        message: action.payload.message,
        transform: action.payload.transform,
        show: true,
      };
    case AlertActionType.HIDE:
      return {
        type: action.payload.type,
        title: action.payload.title,
        message: action.payload.message,
        transform: action.payload.transform,
        show: false,
      };
  }
}

export { setAlertState };
