import MaterializeBadge from "./components/MaterializeBadge.vue";
import MaterializeBrandLogo from "./components/MaterializeBrandLogo.vue";
import MaterializeBreadcrumb from "./components/MaterializeBreadcrumb.vue";
import MaterializeBreadcrumbItem from "./components/MaterializeBreadcrumbItem.vue";
import MaterializeButton from "./components/MaterializeButton.vue";
import MaterializeCheckbox from "./components/MaterializeCheckbox.vue";
import MaterializeChips from "./components/MaterializeChips.vue";
import MaterializeColumn from "./components/MaterializeColumn.vue";
import MaterializeContainer from "./components/MaterializeContainer.vue";
import MaterializeIcon from "./components/MaterializeIcon.vue";
import MaterializeNavbar from "./components/MaterializeNavbar.vue";
import MaterializeRadio from "./components/MaterializeRadio.vue";
import MaterializeRow from "./components/MaterializeRow.vue";
import MaterializeSwitch from "./components/MaterializeSwitch.vue";

import align from "./directives/align";

export default {
  install(Vue) {
    Vue.component("materialize-badge", MaterializeBadge);
    Vue.component("materialize-brand-logo", MaterializeBrandLogo);
    Vue.component("materialize-breadcrumb", MaterializeBreadcrumb);
    Vue.component("materialize-breadcrumb-item", MaterializeBreadcrumbItem);
    Vue.component("materialize-button", MaterializeButton);
    Vue.component("materialize-checkbox", MaterializeCheckbox);
    Vue.component("materialize-chips", MaterializeChips);
    Vue.component("materialize-column", MaterializeColumn);
    Vue.component("materialize-container", MaterializeContainer);
    Vue.component("materialize-icon", MaterializeIcon);
    Vue.component("materialize-navbar", MaterializeNavbar);
    Vue.component("materialize-radio", MaterializeRadio);
    Vue.component("materialize-row", MaterializeRow);
    Vue.component("materialize-switch", MaterializeSwitch);

    Vue.directive("align", align);
  }
};
