// eslint-disable-next-line
Vue.use(VueMaterializeCSS);

window.addEventListener("load", () => {
    // eslint-disable-next-line
    new Vue({
        computed: {
            sortedComponents() {
                return this.components.sort((firstComponent,
                    secondComponent) => firstComponent.name.localeCompare(secondComponent.name));
            }
        },
        data: {
            components: [
                {
                    code: '<materialize-icon icon="face" />',
                    name: "Icon"
                },
                {
                    code: "<materialize-brand-logo>Application Name</materialize-brand-logo>",
                    name: "Brand Logo"
                },
                {
                    code: "<materialize-breadcrumb>\n    <!-- breadcrumb items here -->\n</materialize-breadcrumb>",
                    name: "Breadcrumb"
                },
                {
                    code: '<materialize-breadcrumb-item>Home</materialize-breadcrumb-item>\n<materialize-breadcrumb-item to="products">Products</materialize-breadcrumb-item>',
                    name: "Breadcrumb Item"
                }
            ]
        },
        el: "#example",

        mounted() {
            // eslint-disable-next-line
            Prism.highlightAll();
        }
    });
});
