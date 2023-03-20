import { App } from "vue";
import TheToastVue from "../components/TheToast.vue";

export default {
    install: (app: App, options: any) => {
      /*  our code for the plugin goes here
              app is the result of createApp()
              options is user options passed in
          */
         app.component('the-custom-toast', TheToastVue)
    },
};