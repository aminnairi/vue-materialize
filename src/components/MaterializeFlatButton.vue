<template lang="pug">
    button.waves.waves-light.btn-flat(type="button")
        i(v-if="icon" :class="classes")
        slot
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
      return `material-icons ${this.iconSide}`;
    }
  }
};
</script>
