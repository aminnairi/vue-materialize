import MaterializeBrandLogo from "./components/MaterializeBrandLogo.vue";
import MaterializeBreadcrumb from "./components/MaterializeBreadcrumb.vue";
import MaterializeBreadcrumbItem from "./components/MaterializeBreadcrumbItem.vue";
import MaterializeButton from "./components/MaterializeButton.vue";
import MaterializeColumn from "./components/MaterializeColumn.vue";
import MaterializeIcon from "./components/MaterializeIcon.vue";

export default {
    install(Vue) {
        Vue.component("materialize-brand-logo", MaterializeBrandLogo);
        Vue.component("materialize-icon", MaterializeIcon);
        Vue.component("materialize-button", MaterializeButton);
        Vue.component("materialize-breadcrumb", MaterializeBreadcrumb);
        Vue.component("materialize-breadcrumb-item", MaterializeBreadcrumbItem);
        Vue.component("materialize-column", MaterializeColumn);
    }
};
