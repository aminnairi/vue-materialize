<template lang="pug">
    button.waves-effect.waves-light.btn(type="button")
        i(v-if="icon" :class="classes"")
            {{ icon }}
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
      return `material-icons ${iconSide}`;
    }
  }
};
</script>
