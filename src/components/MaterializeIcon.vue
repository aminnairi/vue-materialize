<template>
  <i class="material-icons">{{ icon }}</i>
</template>
<script>
export default {
  props: {
    icon: {
      required: true,
      type: String
    }
  }
};
</script>
