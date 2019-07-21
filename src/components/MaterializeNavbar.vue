<template>
    <div :class="{ 'navbar-fixed': fixed }">
        <nav>
            <div class="nav-wrapper">
                <slot />
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    props: {
        fixed: {
            type: Boolean,
            default: false
        }
    }
}
</script>
