import { computed, ref, watch, inject } from "vue";
type ToastType = "success" | "warning" | "info"
type ToastMessage = {
    message: string,
    counter: number,
    type: ToastType
}
let counter = 2000
const toastMessages = ref<ToastMessage[]>([
    {
        message: 'test',
        counter: counter,
        type: 'success'
    }
])
export function useCustomToast() {
    let intervalDelete: number | undefined = undefined
    const showToast = ref(false)
    counter = inject('custom-toast-counter', 2000)
    const setShow = (val: boolean) => {
        showToast.value = val
    }

    const deleteFirst = () => deleteIndex(0)

    const deleteIndex = (index: number) => {
        toastMessages.value.splice(index, 1)
    }

    const addMessage = (val: string, type: ToastType = 'success') => {
        toastMessages.value.push(
            {
                message: val, 
                counter: counter,
                type: type
            }
        )
    }

    const toggle = () => showToast.value = !showToast.value

    const installInterval = () => {
        console.log("install interval", counter)
        const val = 10
        intervalDelete = window.setInterval(() => {
            const copiedArray = [...toastMessages.value]
            if (copiedArray.length == 0) return
            const newArr = copiedArray.map((x) => {
                x.counter = x.counter - val
                return x
            })
            const filteredArray = newArr.filter((x) => x.counter > 0)
            toastMessages.value = [...filteredArray]
        }, val)
    }
    
    watch(() => [...toastMessages.value], (newVal, oldVal) => {
        if (newVal.length > 0) {
            if (intervalDelete === undefined) {
                installInterval()
            }
        } else {
            clearInterval(intervalDelete)
            // console.clear()
            intervalDelete = undefined
        }
    }, {immediate: true})

    const computedMessages = computed(() => toastMessages.value)


    return {
        toastMessages,
        addMessage,
        setShow,
        toggle,
        deleteIndex,
        computedMessages
    }
}