<template lang="pug">
    div
        router-link.breadcrumb(v-if="router")
            slot
        a.breadcrumb(v-else)
            slot
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
