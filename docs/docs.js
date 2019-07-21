// eslint-disable-next-line
Vue.use(VueMaterializeCSS);

window.addEventListener("load", () => {
  // eslint-disable-next-line
    new Vue({
    computed: {
      sortedComponents() {
        this.$nextTick(() => {
          this.initializePrism();
          this.newScrollSpy();
        });

        return this
          .components
          .filter(component => component.name.replace(" ", "").toLowerCase().includes(this.component.name.replace(" ", "").toLowerCase()))
          .sort((firstComponent, secondComponent) => firstComponent.name.localeCompare(secondComponent.name));
      },

      style() {
        return "color: initial;";
      }
    },

    data: {
      component: {
        name: ""
      },
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
        },
        {
          code: "<materialize-button>Button</materialize-button>\n<materialize-button floating>Button</materialize-button>\n<materialize-button flat>Button</materialize-button>\n<materialize-button submit>Button</materialize-button>\n<materialize-button large>Button</materialize-button>\n<materialize-button small>Button</materialize-button>\n<materialize-button disabled>Button</materialize-button>",
          name: "Button"
        },
        {
          code: '<materialize-column small="12"></materialize-column>\n<materialize-column medium="12"></materialize-column>\n<materialize-column large="12"></materialize-column>\n<materialize-column extra-large="12"></materialize-column>\n<materialize-column offset-small="12"></materialize-column>\n<materialize-column offset-medium="12"></materialize-column>\n<materialize-column offset-large="12"></materialize-column>\n<materialize-column offset-extra-large="12"></materialize-column>\n',
          name: "Column"
        },
        {
          code: '<materialize-switch name="send-email" />\n<materialize-switch off="Non" on="Oui" name="archive-post" />',
          name: "Switch"
        },
        {
          code: '<materialize-radio>Red</materialize-radio>\n\n<materialize-radio with-gap>Green</materialize-radio>\n<materialize-radio with-gap>Blue</materialize-radio>\n\n<materialize-radio name="OS">Android</materialize-radio>\n<materialize-radio name="OS">iOS</materialize-radio>\n<materialize-radio name="OS" disabled>Windows Phone</materialize-radio>',
          name: "Radio"
        },
        {
          code: "<materialize-navbar>\n  <!-- Navbar items -->\n</materialize-navbar>\n\n<materialize-navbar fixed>\n  <!-- Navbar items -->\n</materialize-navbar>",
          name: "Navbar"
        },
        {
          code: '<materialize-chips>Tag</materialize-chips>\n<materialize-chips image="/img/jane-doe.jpg" alt="Profile picture of Jane Doe">Jane Doe</materialize-chips>\n<materialize-chips closable>Red</materialize-chips>',
          name: "Chips"
        },
        {
          code: "<materialize-checkbox>Red</materialize-checkbox>\n<materialize-checkbox checked>Yellow</materialize-checkbox>\n<materialize-checkbox checked filled>Filled in</materialize-checkbox>\n<materialize-checkbox checked disabled>Green</materialize-checkbox>\n<materialize-checkbox disabled>Brown</materialize-checkbox>",
          name: "Checkbox"
        }
      ],
      scrollspy: {
        instances: null
      },
      searching: false
    },
    el: "#app",

    methods: {
      href(name) {
        return `#${ this.id(name) }`;
      },

      id(name) {
        return name.toLowerCase().replace(" ", "-");
      },

      newScrollSpy() {
        if (this.scrollspy.instances) {
          this.scrollspy.instances.forEach(instance => instance.destroy());
        }

        // eslint-disable-next-line
				this.scrollspy.instances = M.ScrollSpy.init(document.querySelectorAll(".scrollspy"), {
          scrollOffset: 64,
          throttle: 0
        });
      },

      initializePrism() {
        // eslint-disable-next-line
				Prism.highlightAll();
      },
      displaySearchBar() {
        this.searching = true;

        this.$nextTick(function() {
          this.$refs.searchInput.focus();
        });
      },
      hideSearchBar() {
        this.searching = false;
        this.component.name = "";
      }
    },

    mounted() {
      const pushpinTarget = document.querySelector("#fixed-navigation");

      this.newScrollSpy();
      this.initializePrism();

      // eslint-disable-next-line
			M.Pushpin.init(pushpinTarget, {
        top: 100
      });
    }
  });
});
