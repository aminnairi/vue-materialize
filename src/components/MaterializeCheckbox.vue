<template>
  <p>
    <label>
      <input
        type="checkbox"
        :class="{'filled-in': filled}"
        v-bind="$attrs"
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
    filled: {
      "default": false,
      "type": Boolean
    }
  }
};
</script>
