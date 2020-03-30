const noImage = require('@/assets/imgs/notfound.png')

export default {
  name: 'itemsList',
  props: [
    'items',
    'title',
    'hintColumnName',
    'textNoneFound',
    'paginated',
    'totalPages',
    'isLoadingItems',
    'isDisabledItems',
    'noItemsFoundText'
  ],
  data () {
    return {
      page: 1,
      search: '',
      isSearching: false
    }
  },
  methods: {
    creatorImage (stringImage) {
      // debugger
      if (stringImage === 'N/A') {
        // debugger
      }
      return stringImage === 'N/A' ? noImage : stringImage
    },
    itemDetail (item) {
      this.$emit('emit-detail-item', item)
    },
    changePage (page) {
      this.$emit('emit-change-page', page)
    }
  }
}
