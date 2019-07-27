<template>
  <div class="chip">
    <img
      v-if="image"
      :src="image"
      :alt="alt">
    <slot />

    <i
      v-if="closable"
      class="material-icons">close</i>
  </div>
</template>

<script>
export default {
  props: {
    alt: {
      "default": "",
      "type": String
    },

    closable: {
      "default": false,
      "type": Boolean
    },

    image: {
      "default": "",
      "type": String
    }
  }
};
</script>
