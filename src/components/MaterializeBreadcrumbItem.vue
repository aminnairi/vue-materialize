<template>
  <div>
    <router-link
      v-if="to"
      class="breadcrumb">
      <slot />
    </router-link>

    <a
      v-else
      class="breadcrumb">
      <slot />
    </a>
  </div>
</template>

<script>
export default {};
</script>
