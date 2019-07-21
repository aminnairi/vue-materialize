<template>
  <button :class="classes" :type="type" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    waves: {
      type: String,
      default: undefined
    },

    flat: {
      type: Boolean,
      default: false
    },

    floating: {
      type: Boolean,
      default: false
    },

    submit: {
      type: Boolean,
      default: false
    },

    large: {
      type: Boolean,
      default: false
    },

    small: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes() {
      return {
        btn: !this.flat && !this.floating,
        "btn-flat": this.flat && !this.floating,
        "btn-floating": this.floating && !this.flat,
        "btn-small": this.small && !this.large,
        "btn-large": this.large && !this.small,
        "waves-effect": this.waves,
        [`waves-${waves}`]: this.waves
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
