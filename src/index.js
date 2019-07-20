import MaterializeBrandLogo from "./components/MaterializeBrandLogo.vue";
import MaterializeIcon from "./components/MaterializeIcon.vue";

export default {
    install(Vue) {
        Vue.component("materialize-brand-logo", MaterializeBrandLogo);
        Vue.component("materialize-icon", MaterializeIcon);
    }
};
