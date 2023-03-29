import {Plugin} from 'vue'

export type ToastType = "success" | "warning" | "info"

export interface ToastMessage {
    message: string,
    counter: number,
    type: ToastType
}

declare const CustomToast: Plugin

export default CustomToast