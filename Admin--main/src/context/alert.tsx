import { createContext } from "react";
import { AlertProviderContext, AlertProviderStruct } from "../core/provider";

export const AlertContext = createContext<AlertProviderContext | null>(null);

function AlertProvider({ state, dispatch, children} : AlertProviderStruct){
    return <AlertContext.Provider value={{ state, dispatch }}>{children}</AlertContext.Provider>
}

export default AlertProvider;