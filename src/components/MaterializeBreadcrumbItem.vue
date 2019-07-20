<template>
  <div>
    <router-link v-if="router" class="breadcrumb">
      <slot />
    </router-link>
    <a v-else class="breadcrumb">
      <slot />
    </a>
  </div>
</template>
<script>
export default {
  props: {
    router: {
      type: Boolean,
      default: false
    }
  }
};
</script>
