<template>
  <div :class="classes">
    <slot />
  </div>
</template>
<script>
const validator = value => {
  if (value < 1) {
    throw new Error(`expected value to be greater or equal to 1, ${ value } given`);
  }

  if (value > 12) {
    throw new Error(`expected value to be lower or equal to 12, ${ value } given`);
  }

  return true;
};

export default {
  props: {
    small: {
      "default": 12,
      "type": Number,
      validator
    },

    medium: {
      "default": 12,
      "type": Number,
      validator
    },

    large: {
      "default": 12,
      "type": Number,
      validator
    },

    extraLarge: {
      "default": 12,
      "type": Number,
      validator
    },

    offsetSmall: {
      "default": 0,
      "type": Number,
      validator
    },

    offsetMedium: {
      "default": 0,
      "type": Number,
      validator
    },

    offsetLarge: {
      "default": 0,
      "type": Number,
      validator
    },

    offsetExtraLarge: {
      "default": 0,
      "type": Number,
      validator
    }
  },
  computed: {
    classes() {
      return {
        [ `col l${ this.large }` ]: true,
        [ `col m${ this.medium }` ]: true,
        [ `col s${ this.small }` ]: true,
        [ `col xl${ this.extraLarge }` ]: true,
        [ `offset-l${ this.offsetLarge }` ]: this.offsetLarge,
        [ `offset-m${ this.offsetMedium }` ]: this.offsetMedium,
        [ `offset-s${ this.offsetSmall }` ]: this.offsetSmall,
        [ `offset-xl${ this.offsetExtraLarge }` ]: this.offsetExtraLarge
      };
    }
  }
};
</script>
