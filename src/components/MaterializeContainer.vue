<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    full: {
      "default": false,
      "type": Boolean
    }
  },

  computed: {
    classes() {
      return {
        "container": !this.full,
        "container-full": this.full
      };
    }
  }
};
</script>
