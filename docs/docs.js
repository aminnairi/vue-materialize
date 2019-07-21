// eslint-disable-next-line
Vue.use(VueMaterializeCSS);

window.addEventListener("load", () => {
  // eslint-disable-next-line
    new Vue({
    computed: {
      sortedComponents() {
        return this.components.sort((firstComponent, secondComponent) => firstComponent.name.localeCompare(secondComponent.name));
      },

      style() {
        return "color: initial;";
      }
    },

    data: {
      components: [
        {
          code: '<materialize-icon icon="face" />',
          name: "Icon"
        },
        {
          code:
                        "<materialize-brand-logo>Application Name</materialize-brand-logo>",
          name: "Brand Logo"
        },
        {
          code:
                        "<materialize-breadcrumb>\n    <!-- breadcrumb items here -->\n</materialize-breadcrumb>",
          name: "Breadcrumb"
        },
        {
          code:
                        '<materialize-breadcrumb-item>Home</materialize-breadcrumb-item>\n<materialize-breadcrumb-item to="products">Products</materialize-breadcrumb-item>',
          name: "Breadcrumb Item"
        },
        {
          code:
                        "<materialize-button>Button</materialize-button>\n<materialize-button floating>Button</materialize-button>\n<materialize-button flat>Button</materialize-button>\n<materialize-button submit>Button</materialize-button>\n<materialize-button large>Button</materialize-button>\n<materialize-button small>Button</materialize-button>\n<materialize-button disabled>Button</materialize-button>",
          name: "Button"
        },
        {
          code:
                        '<materialize-column small="12"></materialize-column>\n<materialize-column medium="12"></materialize-column>\n<materialize-column large="12"></materialize-column>\n<materialize-column extra-large="12"></materialize-column>\n<materialize-column offset-small="12"></materialize-column>\n<materialize-column offset-medium="12"></materialize-column>\n<materialize-column offset-large="12"></materialize-column>\n<materialize-column offset-extra-large="12"></materialize-column>\n',
          name: "Column"
        },
        {
          code: '<materialize-radio>Red</materialize-radio>\n\n<materialize-radio with-gap>Green</materialize-radio>\n<materialize-radio with-gap>Blue</materialize-radio>\n\n<materialize-radio name="OS">Android</materialize-radio>\n<materialize-radio name="OS">iOS</materialize-radio>\n<materialize-radio name="OS" disabled>Windows Phone</materialize-radio>',
          name: "Radio"
        }
      ]
    },
    el: "#example",

    methods: {
      href(name) {
        return `#${ this.id(name) }`;
      },

      id(name) {
        return name.toLowerCase().replace(" ", "-");
      }
    },

    mounted() {
      // eslint-disable-next-line
            Prism.highlightAll();
      // eslint-disable-next-line
            M.ScrollSpy.init(document.querySelectorAll(".scrollspy"));
      // eslint-disable-next-line
            M.Pushpin.init(document.querySelector("#fixed-navigation"));
    }
  });
});
