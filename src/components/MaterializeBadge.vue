<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    "color": {
      "default": false,
      "type": String
    },

    "new": {
      "default": false,
      "type": Boolean
    }
  },

  data() {
    return {};
  },

  computed: {
    classes() {
      return {
        "badge": true,
        "new": this[ "new" ],
        [ `${ this.color }` ]: this.color
      };
    }
  }
};
</script>
