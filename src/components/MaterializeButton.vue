<template>
  <button
    :class="classes"
    :type="type"
    v-bind="$attrs"
    v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    flat: {
      "default": false,
      "type": Boolean
    },

    floating: {
      "default": false,
      "type": Boolean
    },

    large: {
      "default": false,
      "type": Boolean
    },

    small: {
      "default": false,
      "type": Boolean
    },

    submit: {
      "default": false,
      "type": Boolean
    },

    waves: {
      "default": undefined,
      "type": String
    }
  },

  computed: {
    classes() {
      return {
        "btn": !this.flat && !this.floating,
        "btn-flat": this.flat && !this.floating,
        "btn-floating": this.floating && !this.flat,
        "btn-large": this.large && !this.small,
        "btn-small": this.small && !this.large,
        "waves-effect": this.waves,
        [ `waves-${ this.waves }` ]: this.waves
      };
    },

    type() {
      if (this.submit) {
        return "submit";
      }

      return "button";
    }
  }
};
</script>
