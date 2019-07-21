<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    new: {
      type: Boolean,
      default: false
    },

    color: {
      type: String,
      default: false
    }
  },

  data() {
    return {};
  },

  computed: {
    classes() {
      return {
        badge: true,
        new: this["new"],
        [`${this.color}`]: this.color
      };
    }
  }
};
</script>
