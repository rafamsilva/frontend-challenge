import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
  },
  data: () => {
    return {
      showSettingsModal: false
    }
  },
  methods: {
    ...mapActions([
    ]),
    openSettings () {
      this.$router.push({ name: 'Configurations' })
    }
  },
  computed: {
    ...mapGetters([
    ])
  }
}
