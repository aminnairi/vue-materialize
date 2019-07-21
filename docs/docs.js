// eslint-disable-next-line
Vue.use(VueMaterializeCSS);

window.addEventListener("load", () => {
  // eslint-disable-next-line
    new Vue({
    el: "#app",

    data: {
      component: {
        name: ""
      },
      components: [
        {
          code: '<materialize-icon icon="face" />',
          link: "https://materializecss.com/icons.html",
          name: "Icon"
        },
        {
          code: "<materialize-brand-logo>Application Name</materialize-brand-logo>",
          link: "https://materializecss.com/navbar.html",
          name: "Brand Logo"
        },
        {
          code: "<materialize-breadcrumb>\n    <!-- breadcrumb items here -->\n</materialize-breadcrumb>",
          link: "https://materializecss.com/breadcrumbs.html",
          name: "Breadcrumb"

        },
        {
          code: '<materialize-breadcrumb-item>Home</materialize-breadcrumb-item>\n<materialize-breadcrumb-item to="products">Products</materialize-breadcrumb-item>',
          link: "https://materializecss.com/breadcrumbs.html",
          name: "Breadcrumb Item"
        },
        {
          code: "<materialize-button>Button</materialize-button>\n<materialize-button floating>Button</materialize-button>\n<materialize-button flat>Button</materialize-button>\n<materialize-button submit>Button</materialize-button>\n<materialize-button large>Button</materialize-button>\n<materialize-button small>Button</materialize-button>\n<materialize-button disabled>Button</materialize-button>",
          link: "https://materializecss.com/buttons.html",
          name: "Button"
        },
        {
          code: '<materialize-column small="12"></materialize-column>\n<materialize-column medium="12"></materialize-column>\n<materialize-column large="12"></materialize-column>\n<materialize-column extra-large="12"></materialize-column>\n<materialize-column offset-small="12"></materialize-column>\n<materialize-column offset-medium="12"></materialize-column>\n<materialize-column offset-large="12"></materialize-column>\n<materialize-column offset-extra-large="12"></materialize-column>\n',
          link: "https://materializecss.com/grid.html",
          name: "Column"
        },
        {
          code: '<materialize-switch name="send-email" />\n<materialize-switch off="Non" on="Oui" name="archive-post" />',
          link: "https://materializecss.com/switches.html",
          name: "Switch"
        },
        {
          code: '<materialize-radio>Red</materialize-radio>\n\n<materialize-radio with-gap>Green</materialize-radio>\n<materialize-radio with-gap>Blue</materialize-radio>\n\n<materialize-radio name="OS">Android</materialize-radio>\n<materialize-radio name="OS">iOS</materialize-radio>\n<materialize-radio name="OS" disabled>Windows Phone</materialize-radio>',
          link: "https://materializecss.com/radio-buttons.html",
          name: "Radio"
        },
        {
          code: "<materialize-navbar>\n  <!-- Navbar items -->\n</materialize-navbar>\n\n<materialize-navbar fixed>\n  <!-- Navbar items -->\n</materialize-navbar>",
          link: "https://materializecss.com/navbar.html",
          name: "Navbar"
        },
        {
          code: '<materialize-chips>Tag</materialize-chips>\n<materialize-chips image="/img/jane-doe.jpg" alt="Profile picture of Jane Doe">Jane Doe</materialize-chips>\n<materialize-chips closable>Red</materialize-chips>',
          link: "https://materializecss.com/chips.html",
          name: "Chips"
        },
        {
          code: "<materialize-checkbox>Red</materialize-checkbox>\n<materialize-checkbox checked>Yellow</materialize-checkbox>\n<materialize-checkbox checked filled>Filled in</materialize-checkbox>\n<materialize-checkbox checked disabled>Green</materialize-checkbox>\n<materialize-checkbox disabled>Brown</materialize-checkbox>",
          link: "https://materializecss.com/checkboxes.html",
          name: "Checkbox"
        },
        {
          code: "<materialize-badge>10</materialize-badge>\n<materialize-badge new>Triumph Street Triple S 660 A2</materialize-badge>\n<materialize-badge new color=\"red\">Triumph Daytona 765</materialize-badge>",
          link: "https://materializecss.com/badges.html",
          name: "Badge"
        }
      ],
      scrollspy: {
        instances: null
      },
      searching: false
    },
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

    mounted() {
      const pushpinTarget = document.querySelector("#fixed-navigation");

      this.newScrollSpy();
      this.initializePrism();

      // eslint-disable-next-line
			M.Pushpin.init(pushpinTarget, {
        top: 100
      });
    },

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
    }
  });
});
