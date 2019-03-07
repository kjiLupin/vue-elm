<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab borders-1px">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import { getSeller } from 'api'
export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
  mounted() {
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller().then(seller => {
        this.seller = seller
      })
    }
  },
  components: {
    VHeader
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
@import "~common/stylus/mixin"
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      // border-bottom 1px solid rgba(7, 17, 27, 0.1)
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex: 1
        text-align: center
</style>
