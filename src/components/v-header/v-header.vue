<!--
 * @Description: 顶部header组件
 * @Author: xiaofeng
 * @Date: 2019-01-14 20:27:45
 * @LastEditTime: 2019-01-23 08:55:28
 * @LastEditors: xiaofeng
 -->
<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-header',
    props: {
      seller: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      }
    }
  }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"

  .header
    color $color-white
    background $color-background-ss
    position: relative
    .content-wrapper
      padding 24px 12px 18px 24px
      font-size: 0
      position: relative
      .avatar
        display: inline-block
        vertical-align: top
        img
          border-radius: 2px
      .content
        display: inline-block
        margin-left: 16px
        .title
          margin: 2px 0 8px 0
          .brand
            width: 30px
            height: 18px
            display: inline-block
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
            vertical-align: top
          .name
            font-size: 16px
            font-weight: bold
            line-height: 18px
            margin-left: 6px
            vertical-align: top
        .description
          font-size: 12px
          line-height: 12px
          margin-bottom: 10px

        .support
          .icon
            display: inline-block
            width: 12px
            height: 12px
            margin: 0 4px 2px 0
            background-size: 12px 12px
            background-repeat: no-repeat
            vertical-align: bottom
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.special
              bg-image('special_1')
            &.invoice
              bg-image('invoice_1')
            &.guarantee
              bg-image('guarantee_1')
          .text
            font-size: 10px
            line-height: 12px
            vertical-align: bottom
      .support-count
        // display: inline-block
        height: 24px
        line-height: 24px;
        text-align: center
        position: absolute
        right: 12px
        bottom: 18px
        padding: 0px 8px
        background-color rgb(0, 0, 0, 0.2)
        border-radius: 14px
        .count
          font-size: 10px
          vertical-align: top
        .icon-keyboard_arrow_right
          font-size: 10px
          line-height: 24px
          margin-left: 2px
          vertical-align: top
    .bulletin-wrapper
      position: relative
      height: 28px
      padding: 0 22px 0 12px
      line-height: 28px
      background-color: rgba(7, 17, 27, 0.2)
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      .bulletin-title
        width: 22px
        height: 12px
        display: inline-block
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
        vertical-align: top
        margin-top: 7px
      .bulletin-text
        font-size: 10px
        margin: 0 4px
        font-weight: 200
        vertical-align: top
      .icon-keyboard_arrow_right
        position: absolute
        top: 0
        right: 8px
        font-size: 10px
        line-height: 28px
    .background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter: blur(10px)
</style>
