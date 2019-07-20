<template>
  <div :class="classes">
    <slot />
  </div>
</template>
<script>
const validator = value => {
  if (value < 1) {
    throw new Error(
      `expected value to be greater or equal to 1, ${value} given`
    );
  }

  if (value > 12) {
    throw new Error(
      `expected value to be lower or equal to 12, ${value} given`
    );
  }

  return true;
};

export default {
  props: {
    small: {
      type: Number,
      default: 12,
      validator
    },
    offsetSmall: {
      type: Number,
      default: 0,
      validator
    },
    medium: {
      type: Number,
      default: 12,
      validator
    },
    offsetMedium: {
      type: Number,
      default: 0,
      validator
    },
    large: {
      type: Number,
      default: 12,
      validator
    },
    offsetLarge: {
      type: Number,
      default: 0,
      validator
    },
    extraLarge: {
      type: Number,
      default: 12,
      validator
    },
    offsetExtraLarge: {
      type: Number,
      default: 0,
      validator
    }
  },
  computed: {
    classes() {
      const offsetSmall =
        this.offsetSmall > 0 ? `offset-s${this.offsetSmall}` : "";
      const offsetMedium =
        this.offsetMedium > 0 ? `offset-m${this.offsetMedium}` : "";
      const offsetLarge =
        this.offsetLarge > 0 ? `offset-l${this.offsetLarge}` : "";
      const offsetExtraLarge =
        this.offsetExtraLarge > 0 ? `offset-xl${this.offsetExtraLarge}` : "";

      return `col s${this.small} ${offsetSmall} m${this.medium} ${offsetMedium} l${this.large} ${offsetLarge} xl${this.extraLarge} ${offsetExtraLarge}`;
    }
  }
};
</script>
