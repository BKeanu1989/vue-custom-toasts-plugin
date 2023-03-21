import { ToastType } from "./ToastType"
export interface ToastMessage {
    message: string,
    counter: number,
    type: ToastType
}