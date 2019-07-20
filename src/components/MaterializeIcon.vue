<template lang="pug">
    i.material-icons {{ icon }}
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  }
};
</script>
