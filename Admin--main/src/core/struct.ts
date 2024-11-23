import { AlertType } from "./enums";

interface AdminDataStruct{
    firstName: string,
    lastName: string,
    email: string,
    tel?: string,
    password?: string;
}

interface ElementTransform{
    x: number,
    y: number,
    width: 'fit-content' | 'fill-available',
}
interface AlertStruct{
    show: boolean,
    type: AlertType,
    title: string,
    transform?: ElementTransform,
    message: string
}

export type { AdminDataStruct, AlertStruct, ElementTransform }