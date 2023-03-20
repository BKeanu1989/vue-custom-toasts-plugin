import { ref, watch } from "vue";

export function useCustomToast() {
    const counter = 5000;
    let intervalDelete: number | undefined = undefined
    const toastMessages = ref([
        {
            message: 'test',
            counter: counter
        }
    ])
    const showToast = ref(false)

    const setShow = (val: boolean) => {
        showToast.value = val
    }

    const deleteFirst = () => deleteIndex(0)

    const deleteIndex = (index: number) => {
        toastMessages.value.splice(index, 1)
    }

    const addMessage = (val: string) => toastMessages.value.push({message: val, counter: counter})

    const toggle = () => showToast.value = !showToast.value

    const installInterval = () => {
        console.log("install interval")
        const val = 10
        intervalDelete = setInterval(() => {
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
            console.clear()
            intervalDelete = undefined
        }
    }, {immediate: true})




    return {
        toastMessages,
        addMessage,
        setShow,
        toggle,
        deleteIndex
    }
}