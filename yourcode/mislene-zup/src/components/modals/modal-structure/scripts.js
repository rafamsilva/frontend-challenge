export default {
  props: [
    'openModal',
    'modalPersistent',
    'icon',
    'title',
    'message',
    'backgroundColor',
    'textConfirm',
    'textCancel',
    'isConfirmButtonLoading'
  ],
  methods: {
    confirm () {
      this.$emit('emit-confirm')
    },
    cancel () {
      this.$emit('emit-cancel')
    }
  },
  computed: {
    iconName () {
      return `mdi-${this.icon}`
    },
    showModal () {
      return this.openModal
    }
  }
}
