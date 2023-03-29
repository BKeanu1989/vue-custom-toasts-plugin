import { App, Plugin } from "vue";
import TheToastVue from "../components/TheToast.vue";
import { useCustomToast } from "../composables/UseCustomToast";
const CustomToast: Plugin = {
    install: (app: App, options: any) :void => {
        // install: (app: App) :void => {
      /*  our code for the plugin goes here
              app is the result of createApp()
              options is user options passed in
          */
         let instance = useCustomToast()
         app.component('the-custom-toast', TheToastVue)
         app.provide('custom-toast-counter', 5000)
         app.provide('$cToast', instance)
    },
};

export default CustomToast;
export {useCustomToast, CustomToast, TheToastVue}