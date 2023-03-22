export type ToastType = "success" | "warning" | "info"

export interface ToastMessage {
    message: string,
    counter: number,
    type: ToastType
}