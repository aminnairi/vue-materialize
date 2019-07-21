<template>
    <div class="chip">
        <img v-if="image" :src="image" :alt="alt" />
        <slot />
        <i v-if="closable" class="material-icons">close</i>
  </div>
</template>
<script>
export default {
    props: {
        image: {
            type: String,
            default: ""
        },
        alt: {
            type: String,
            required: this.image
        },
        closable: {
            type: Boolean,
            default: false
        }
    }
}
</script>
