export default {
  inheritAttrs: false,
  props: {
    duration: {
      default: 0.3,
      type: [Number, Object],
    },

    group: {
      default: false,
      type: Boolean,
    },

    tag: {
      default: 'span',
      type: String,
    },

    mode: {
      default: null,
      type: String,
      validator: (value) => [
        'in-out',
        'out-in',
        null,
      ].includes(value),
    },
  },

  computed: {
    componentType() {
      return this.group ? 'transition-group' : 'transition';
    },

    durationEnter() {
      return this.duration.enter ? this.duration.enter : this.duration;
    },

    durationLeave() {
      return this.duration.leave ? this.duration.leave : this.duration;
    },
  },
};
