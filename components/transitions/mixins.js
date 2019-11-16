export default {
  inheritAttrs: false,
  props: {
    /**
     * Transition duration. Number for specifying the same duration for enter/leave transitions
     * Object style { enter: 300, leave: 200 } for specifying explicit durations for enter/leave
     */
    duration: {
      type: [Number, Object],
      default: 0.3,
    },
    /**
     * Whether the component should be a `transition-group` component.
     */
    group: Boolean,
    /**
     * Transition tag, in case the component is a `transition-group`
     */
    tag: {
      type: String,
      default: 'span',
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
