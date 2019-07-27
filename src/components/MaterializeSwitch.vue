<template>
  <div class="switch">
    <label>
      {{ off }}
      <input
        type="checkbox"
        v-bind="$attrs"
        v-on="$listeners">
      <span class="lever" />
      {{ on }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    off: {
      "default": "Off",
      "type": String
    },

    on: {
      "default": "On",
      "type": String
    }
  }
};
</script>
