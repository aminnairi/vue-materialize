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
          code: {
            browser: `<doctype html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <div id="app">
      <materialize-icon icon="face" />
    </div>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-materialize/dist/index.js"></script>
    <script>
      Vue.use(VueMaterializeCSS);
      
      new Vue({
        el: "#app"
      });
    </script>
  </body>
</html>`,
            node: `<template>
  <materialize-icon icon="face" />
</template>
<script>
  import { MaterializeIcon } from "vue-materialize";

  export default {
    components: {
      MaterializeIcon
    }
  }
</script>`
          },
          link: "https://materializecss.com/icons.html",
          name: "Icon"
        },
        {
          code: {
            browser: `<doctype html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <div id="app">
      <materialize-brand-logo>Application Name</materialize-brand-logo>
    </div>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-materialize/dist/index.js"></script>
    <script>
      Vue.use(VueMaterializeCSS);
      
      new Vue({
        el: "#app"
      });
    </script>
  </body>
</html>`,
            node: `<template>
  <materialize-brand-logo>Application Name</materialize-brand-logo>
</template>
<script>
import { MaterializeBrandLogo } from "vue-materialize";

export default {
  components: {
    MaterializeBrandLogo
  }
}
</script>`
          },
          link: "https://materializecss.com/navbar.html",
          name: "Brand Logo"
        },
        {
          code: {
            browser: `<doctype html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <div id="app">
      <materialize-breadcrumb>
        <!-- breadcrumb items here -->
      </materialize-breadcrumb>
    </div>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-materialize/dist/index.js"></script>
    <script>
      Vue.use(VueMaterializeCSS);
      
      new Vue({
        el: "#app"
      });
    </script>
  </body>
</html>`,
            node: `<template>
  <materialize-breadcrumb>
    <!-- breadcrumb items here -->
  </materialize-breadcrumb>
</template>
<script>
import { MaterializeBreadcrumb } from "vue-materialize";

export default {
  components: {
    MaterializeBreadcrumb
  }
}
</script>`
          },
          link: "https://materializecss.com/breadcrumbs.html",
          name: "Breadcrumb"

        },
        {
          code: {
            browser: `<doctype html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <div id="app">
      <materialize-breadcrumb-item>Home</materialize-breadcrumb-item>
      <materialize-breadcrumb-item to="products">Products</materialize-breadcrumb-item>
    </div>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-materialize/dist/index.js"></script>
    <script>
      Vue.use(VueMaterializeCSS);
      
      new Vue({
        el: "#app"
      });
    </script>
  </body>
</html>`,
            node: `<template>
  <materialize-breadcrumb-item>Home</materialize-breadcrumb-item>
  <materialize-breadcrumb-item to="products">Products</materialize-breadcrumb-item>
</template>
<script>
import { MaterializeBreadcrumbItem } from "vue-materialize";

export default {
  components: {
    MaterializeBreadcrumbItem
  }
}
</script>`
          },
          link: "https://materializecss.com/breadcrumbs.html",
          name: "Breadcrumb Item"
        },
        {
          code: {
            browser: `<doctype html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <div id="app">
      <materialize-button>Button</materialize-button>
      <materialize-button floating>Button</materialize-button>
      <materialize-button flat>Button</materialize-button>
      <materialize-button submit>Button</materialize-button>
      <materialize-button large>Button</materialize-button>
      <materialize-button small>Button</materialize-button>
    </div>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-materialize/dist/index.js"></script>
    <script>
      Vue.use(VueMaterializeCSS);
      
      new Vue({
        el: "#app"
      });
    </script>
  </body>
</html>`,
            node: `<template>
  <materialize-button>Button</materialize-button>
  <materialize-button floating>Button</materialize-button>
  <materialize-button flat>Button</materialize-button>
  <materialize-button submit>Button</materialize-button>
  <materialize-button large>Button</materialize-button>
  <materialize-button small>Button</materialize-button>
  <materialize-button disabled>Button</materialize-button>
</template>
<script>
import { MaterializeButton } from "vue-materialize";

export default {
  components: {
    MaterializeButton
  }
}
</script>`
          },
          link: "https://materializecss.com/buttons.html",
          name: "Button"
        },
        {
          code: {
            browser: `<doctype html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <div id="app">
      <materialize-column small="12"></materialize-column>
      <materialize-column medium="12"></materialize-column>
      <materialize-column large="12"></materialize-column>
      <materialize-column extra-large="12"></materialize-column>
      <materialize-column offset-small="12"></materialize-column>
      <materialize-column offset-medium="12"></materialize-column>
      <materialize-column offset-large="12"></materialize-column>
      <materialize-column offset-extra-large="12"></materialize-column>
    </div>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-materialize/dist/index.js"></script>
    <script>
      Vue.use(VueMaterializeCSS);
      
      new Vue({
        el: "#app"
      });
    </script>
  </body>
</html>`,
            node: `<template>
  <materialize-column small="12"></materialize-column>
  <materialize-column medium="12"></materialize-column>
  <materialize-column large="12"></materialize-column>
  <materialize-column extra-large="12"></materialize-column>
  <materialize-column offset-small="12"></materialize-column>
  <materialize-column offset-medium="12"></materialize-column>
  <materialize-column offset-large="12"></materialize-column>
  <materialize-column offset-extra-large="12"></materialize-column>
</template>
<script>
import { MaterializeColumn } from "vue-materialize";

export default {
  components: {
    MaterializeColumn
  }
}
</script>`
          },
          link: "https://materializecss.com/grid.html",
          name: "Column"
        },
        {
          code: {
            browser: `<doctype html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <div id="app">
      <materialize-switch name="send-email" />
      <materialize-switch off="Non" on="Oui" name="archive-post" />
    </div>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-materialize/dist/index.js"></script>
    <script>
      Vue.use(VueMaterializeCSS);
      
      new Vue({
        el: "#app"
      });
    </script>
  </body>
</html>`,
            node: `<template>
  <materialize-switch name="send-email" />
  <materialize-switch off="Non" on="Oui" name="archive-post" />
</template>
<script>
import { MaterializeSwitch } from "vue-materialize";

export default {
  components: {
    MaterializeSwitch
  }
}
</script>`
          },
          link: "https://materializecss.com/switches.html",
          name: "Switch"
        },
        {
          code: {
            browser: `<doctype html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <div id="app">
      <materialize-radio>Red</materialize-radio>
    
      <materialize-radio with-gap>Green</materialize-radio>
      <materialize-radio with-gap>Blue</materialize-radio>
      
      <materialize-radio name="OS">Android</materialize-radio>
      <materialize-radio name="OS">iOS</materialize-radio>
      <materialize-radio name="OS" disabled>Windows Phone</materialize-radio>
    </div>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-materialize/dist/index.js"></script>
    <script>
      Vue.use(VueMaterializeCSS);
      
      new Vue({
        el: "#app"
      });
    </script>
  </body>
</html>`,
            node: `<template>
  <materialize-radio>Red</materialize-radio>
  
  <materialize-radio with-gap>Green</materialize-radio>
  <materialize-radio with-gap>Blue</materialize-radio>
  
  <materialize-radio name="OS">Android</materialize-radio>
  <materialize-radio name="OS">iOS</materialize-radio>
  <materialize-radio name="OS" disabled>Windows Phone</materialize-radio>
</template>
<script>
import { MaterializeRadio } from "vue-materialize";

export default {
  components: {
    MaterializeRadio
  }
}
</script>`
          },
          link: "https://materializecss.com/radio-buttons.html",
          name: "Radio"
        },
        {
          code: {
            browser: `<doctype html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <div id="app">
      <materialize-navbar>
        <!-- Navbar items -->
      </materialize-navbar>
      
      <materialize-navbar fixed>
        <!-- Navbar items -->
      </materialize-navbar>
    </div>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-materialize/dist/index.js"></script>
    <script>
      Vue.use(VueMaterializeCSS);
      
      new Vue({
        el: "#app"
      });
    </script>
  </body>
</html>`,
            node: `<template>
  <materialize-navbar>
    <!-- Navbar items -->
  </materialize-navbar>
  
  <materialize-navbar fixed>
    <!-- Navbar items -->
  </materialize-navbar>
</template>
<script>
import { MaterializeNavbar } from "vue-materialize";

export default {
  components: {
    MaterializeNavbar
  }
}
</script>`
          },
          link: "https://materializecss.com/navbar.html",
          name: "Navbar"
        },
        {
          code: {
            browser: `<doctype html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <div id="app">
      <materialize-chips>Tag</materialize-chips>
      <materialize-chips image="/img/jane-doe.jpg" alt="Profile picture of Jane Doe">Jane Doe</materialize-chips>
      <materialize-chips closable>Red</materialize-chips>
    </div>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-materialize/dist/index.js"></script>
    <script>
      Vue.use(VueMaterializeCSS);
      
      new Vue({
        el: "#app"
      });
    </script>
  </body>
</html>`,
            node: `<template>
  <materialize-chips>Tag</materialize-chips>
  <materialize-chips image="/img/jane-doe.jpg" alt="Profile picture of Jane Doe">Jane Doe</materialize-chips>
  <materialize-chips closable>Red</materialize-chips>
</template>
<script>
import { MaterializeChips } from "vue-materialize";

export default {
  components: {
    MaterializeChips
  }
}
</script>`
          },
          link: "https://materializecss.com/chips.html",
          name: "Chips"
        },
        {
          code: {
            browser: `<doctype html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <div id="app">
      <materialize-checkbox>Red</materialize-checkbox>
      <materialize-checkbox checked>Yellow</materialize-checkbox>
      <materialize-checkbox checked filled>Filled in</materialize-checkbox>
      <materialize-checkbox checked disabled>Green</materialize-checkbox>
      <materialize-checkbox disabled>Brown</materialize-checkbox>
    </div>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-materialize/dist/index.js"></script>
    <script>
      Vue.use(VueMaterializeCSS);
      
      new Vue({
        el: "#app"
      });
    </script>
  </body>
</html>`,
            node: `<template>
  <materialize-checkbox>Red</materialize-checkbox>
  <materialize-checkbox checked>Yellow</materialize-checkbox>
  <materialize-checkbox checked filled>Filled in</materialize-checkbox>
  <materialize-checkbox checked disabled>Green</materialize-checkbox>
  <materialize-checkbox disabled>Brown</materialize-checkbox>
</template>
<script>
import { MaterializeCheckbox } from "vue-materialize";

export default {
  components: {
    MaterializeCheckbox
  }
}
</script>`
          },
          link: "https://materializecss.com/checkboxes.html",
          name: "Checkbox"
        },
        {
          code: {
            browser: `<doctype html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <div id="app">
      <materialize-badge>10</materialize-badge>
      <materialize-badge new>Triumph Street Triple S 660 A2</materialize-badge>
      <materialize-badge new color=\"red\">Triumph Daytona 765</materialize-badge>
    </div>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-materialize/dist/index.js"></script>
    <script>
      Vue.use(VueMaterializeCSS);
      
      new Vue({
        el: "#app"
      });
    </script>
  </body>
</html>`,
            node: `<template>
  <materialize-badge>10</materialize-badge>
  <materialize-badge new>Triumph Street Triple S 660 A2</materialize-badge>
  <materialize-badge new color=\"red\">Triumph Daytona 765</materialize-badge>
</template>
<script>
import { MaterializeBadge } from "vue-materialize";

export default {
  components: {
    MaterializeBadge
  }
}
</script>`
          },
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
      someComponentsFound() {
        return this.sortedComponents.length > 0;
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

    mounted() {
      const pushpinTarget = document.querySelector("#fixed-navigation");

      this.newScrollSpy();
      this.initializePrism();
      this.initializeTabs();
      this.initalizeClipboardJS();

      // eslint-disable-next-line
			M.Pushpin.init(pushpinTarget, {
        top: 100
      });
    },
    updated() {
      this.initializeTabs();
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
      initializeTabs() {
        /**
         * @todo Use ref="" instead?
         */
        M.Tabs.init(document.querySelectorAll(".tabs"));
      },
      initalizeClipboardJS() {
        const clipboard = new ClipboardJS(".copy-to-clipboard");

        clipboard.on("success", event => {
          M.Toast.dismissAll();

          new M.Toast({
            html: "Copied.",
            classes: "teal darken-1"
          });

          event.clearSelection();
        });
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
      this.initializeTabs();

      // eslint-disable-next-line
			M.Pushpin.init(pushpinTarget, {
        top: 100,
        offset: 64
      });
    },
    updated() {
      this.initializeTabs();
    }
  });
});
