<template>
  <button type="button" class="waves-effect waves-light btn">
    <i v-if="icon" class="classes">
      {{ icon }}
      <slot />
    </i>
  </button>
</template>
<script>
export default {};
</script>
