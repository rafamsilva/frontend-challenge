import { mapActions } from 'vuex'
import { ADD_TOAST_MESSAGE } from 'vuex-toast'
import FooterZup from '@/components/footer/'
import ZupHeader from '@/components/header/'
import ItemsList from '@/components/items-list'

export default {
  data () {
    return {
      titleSearch: '',
      yearSearch: '',
      typeSearch: '',
      moviesTypes: [
        { name: 'Filmes', value: 'movie' },
        { name: 'Séries', value: 'series' },
        { name: 'Episódio', value: 'episode' }
      ],
      isLoadingMovies: false,
      movies: [],
      totalPages: 0,
      page: 1
    }
  },
  components: {
    FooterZup,
    ZupHeader,
    ItemsList
  },
  // mounted () {},
  methods: {
    ...mapActions([
      'actionGetByTitle',
      'actionResetPassword'
    ]),
    ...mapActions({
      addToast: ADD_TOAST_MESSAGE
    }),
    searchMovies () {
      const erro = this.validateMovieSearch()
      if (!erro) {
        const params = {
          title: this.titleSearch,
          type: this.typeSearch,
          year: this.yearSearch,
          page: this.page
        }

        this.isLoadingMovies = true
        this.actionGetByTitle(params)
          .then((response) => {
            this.isLoadingMovies = false
            this.movies = response.data.Search || []
            this.totalPages = isNaN(response.data.totalResults) ? 0 : Number(response.data.totalResults)
            console.log(this.movies)
          }).catch(() => {
            this.isLoadingMovies = false
            this.addToast({
              text: 'Desculpe, mas não foi possível acessar os filmes, verifique sua internet.',
              type: 'danger'
            })
          })
      }
    },
    movieDetails (movie) {
      this.$router.push({ path: `/movie/${movie.imdbID}` })
    },
    changePagination (page) {
      this.page = page
      this.searchMovies()
    },
    validateMovieSearch () {
      let erro = ''
      if (!this.titleSearch) {
        erro = 'Favor preencher o campo de título'
      }
      if (erro) {
        this.addToast({
          text: erro,
          type: 'danger'
        })
      }
      return erro
    }
  }
}
