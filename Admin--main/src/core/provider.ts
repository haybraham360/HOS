import { Dispatch, ReactNode } from "react";
import { AlertStruct } from "./struct"
import { AlertActionType } from "./enums";

interface AlertAction{
    type: AlertActionType;
    payload: AlertStruct;
}

interface AlertProviderStruct{
    state: AlertStruct;
    dispatch: Dispatch<AlertAction>;
    children?: ReactNode;
}

interface AlertProviderContext{
    state: AlertStruct;
    dispatch: Dispatch<AlertAction>;
}



export type { AlertProviderStruct, AlertProviderContext, AlertAction }