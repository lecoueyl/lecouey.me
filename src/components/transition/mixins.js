export default {
  inheritAttrs: false,
  props: {
    duration: {
      type: [Number, Object],
      default: 0.3,
    },

    group: {
      default: false,
      type: Boolean,
    },

    tag: {
      type: String,
      default: 'span',
    },

    mode: {
      default: null,
      type: String,
      validator: (value) => [
        null,
        'in-out',
        'out-in',
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
