<template>
    <Teleport to="body">
        <Transition>
            <div class="toast-container" ref="_toast" v-if="isOpen">
                <div v-for="(toast, index) in usableCustomToast.computedMessages.value" :key="index">
                    <div class="toast-message" style="display: flex;">
                        {{ toast.message }}
                        <div @click="usableCustomToast.deleteIndex(index)" class="close-container">
                            <svg width="800px" height="800px" class="tw-w-5 tw-h-5" :style="{width: '1.25rem', height: '1.25rem'}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#000000"/></svg>
                        </div>
                    </div>
                    <div class="progress-bar" :style="{width: '100%', backgroundColor: '#eee'}">
                        <div class="progress-bar-overlay" :style="{width: `${(toast.counter * 100) / 5000}%`}"></div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { useCustomToast } from '../composables/UseCustomToast';
const usableCustomToast = useCustomToast()

const isOpen = computed(() => usableCustomToast.toastMessages.value.length > 0 ? true : false)
const _toast = ref(null)

onMounted(() => {
})

</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.toast-container {
    position: fixed;
    /* display: flex; */
    margin-top: 2.5rem;
    right: 1.25rem;
    z-index: 50;
    background-color: #555555;
    padding: 0.5rem 1.25rem;
}

.close-container:hover {
    cursor: pointer;
}

.progress-bar {
    height: 5px;
}

.progress-bar-overlay {
    background-color: green;
    height: 5px;
}
</style>