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
    itemDetail (item) {
      this.$emit('emit-detail-item', item)
    },
    changePage (page) {
      this.$emit('emit-change-page', page)
    }
  }
}
