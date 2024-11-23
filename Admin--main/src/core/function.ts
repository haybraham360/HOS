import { AlertActionType, AlertDuration, AlertType } from "./enums";
import { AlertProviderContext } from "./provider";
import { ElementTransform } from "./struct";

interface AlertFunction{
    context: AlertProviderContext | null,
    type: AlertType,
    title: string,
    message: string,
    transform?: ElementTransform,
    duration: AlertDuration,
}

function showAlert({ context, type, title, message, duration, transform } : AlertFunction){
    context?.dispatch({
        type: AlertActionType.SHOW,
        payload: {
          title,
          message,
          type,
          show: true,
          transform
        }
    });

    setTimeout(() => {
        context?.dispatch({
            type: AlertActionType.HIDE,
            payload: {
              title: '',
              message: '',
              type: AlertType.INFO,
              show: false,
              transform: {
                x: 0,
                y: 0,
                width: 'fit-content',
              }
            }
        });
    }, duration);
}

export { showAlert }