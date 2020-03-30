import { mapActions } from 'vuex'
import { ADD_TOAST_MESSAGE } from 'vuex-toast'
import Footer from '@/components/footer/'
import Header from '@/components/header/'

export default {

  props: [
    'id'
  ],
  data () {
    return {
      titleSearch: '',
      movie: {},
      isLoadingMovie: false
    }
  },
  components: {
    Footer,
    Header
  },
  mounted () {
    this.getMovie()
  },
  methods: {
    ...mapActions([
      'actionGetDetailedById'
    ]),
    ...mapActions({
      addToast: ADD_TOAST_MESSAGE
    }),
    getMovie () {
      const id = this.id
      this.isLoadingMovie = true
      this.actionGetDetailedById(id)
        .then((data) => {
          debugger
          this.isLoadingMovie = false
          this.movie = data
        }).catch(() => {
          this.addToast({
            text: 'Desculpe, mas não foi possível acessar o filme desejado, verifique sua internet.',
            type: 'danger'
          })
        })
    }
  }
}
