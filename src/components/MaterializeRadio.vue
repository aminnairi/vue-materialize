<template>
  <p>
    <label>
      <input
        type="radio"
        v-bind="$attrs"
        :class="classes"
        v-on="$listeners">
      <span>
        <slot />
      </span>
    </label>
  </p>
</template>
<script>
export default {
  props: {
    withGap: {
      "default": false,
      "type": Boolean
    }
  },

  computed: {
    classes() {
      return {
        "with-gap": this.withGap
      };
    }
  }
};
</script>
