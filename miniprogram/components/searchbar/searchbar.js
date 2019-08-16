// components/searchbar/searchbar.js
Component({
  /**
   * Component properties
   */
  properties: {
    searchText: {
      type: String, 
      value: ''
    },
    searchFlag: {
      type: Boolean,
      value: false
    }
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    getFocus(e){
      this.setData({
        searchFlag: true,
      })
    },
    getInputText(e){
      this.triggerEvent("getInputText", e)
    },
    startSearch(e) {
      this.triggerEvent("startSearch");
    },
    cancelSearch(e) {
      this.setData({
        searchFlag: false
      });
      this.triggerEvent("cancelSearch")
    },
    clearSearchBar(e) {
      this.setData({
        searchText: ''
      })
    }
  }
})
