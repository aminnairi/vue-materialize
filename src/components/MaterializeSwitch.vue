<template>
    <div class="switch">
        <label>
            {{ off }}
            <input type="checkbox" v-on="$listeners" v-bind="$attrs" />
            <span class="lever"></span>
            {{ on }}
        </label>
    </div>
</template>
<script>
export default {
    props: {
        off: {
            type: String,
            default: "Off"
        },
        on: {
            type: String,
            default: "On"
        }
    }
}
</script>
