<template>
    <ul :class="classes">
        <slot />
    </ul>
</template>
<script>
export default {
    props: {
        withHeader: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes() {
            return {
                "collection": true,
                "with-header": this.withHeader
            }
        }
    }
}
</script>
