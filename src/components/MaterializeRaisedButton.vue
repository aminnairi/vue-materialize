<template lang="pug">
    button.waves-effect.waves-light.btn(type="button")
        i(v-if="icon" v-bind:class="`material-icons ${iconSide}`"")
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
  }
};
</script>
