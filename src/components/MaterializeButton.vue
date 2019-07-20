<template>
  <button type="button" class="waves-effect waves-light btn">
    <i v-if="icon" class="classes">
      {{ icon }}
      <slot />
    </i>
  </button>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: ""
    },
    iconSide: {
      type: String,
      default: "left",
      validator: value => ["left", "right"].includes(value)
    }
  },
  computed: {
    classes() {
      return `material-icons ${iconSide}`;
    }
  }
};
</script>
