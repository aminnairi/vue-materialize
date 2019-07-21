<template>
  <p>
    <label>
      <input type="radio" v-on="$listeners" v-bind="$attrs" :class="classes" />
      <span>
        <slot />
      </span>
    </label>
  </p>
</template>
<script>
export default {
  props: {
    props: {
      withGap: {
        type: Boolean,
        default: false
      }
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
