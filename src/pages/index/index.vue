<template>
  <div class="page">
    <swiper class="swiper-wrap" :indicator-dots="true" :autoplay="true">
      <swiper-item>
        <img class="swiper-img" src="/static/images/banner.jpg" />
      </swiper-item>
      <swiper-item>
        <img class="swiper-img" src="/static/images/banner.jpg" />
      </swiper-item>
      <swiper-item>
        <img class="swiper-img" src="/static/images/banner.jpg" />
      </swiper-item>
      <swiper-item>
        <img class="swiper-img" src="/static/images/banner.jpg" />
      </swiper-item>
    </swiper>
    <div class="page__bd">
      <div class="weui-grids">
        <block v-for="(item,index) in grids" :key="index">
          <navigator :url="item.url" class="weui-grid" hover-class="weui-grid_active">
            <image class="weui-grid__icon" :src="item.src" />
            <div class="weui-grid__label">{{item.name}}</div>
          </navigator>
        </block>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/http/api';
export default {
  data () {
    return {
      grids: [
        { src: '/static/images/icon_nav_button.png', name: 'Button', url: '/pages/button/main' },
        { src: '/static/images/icon_nav_cell.png', name: 'Cell', url: '/pages/cell/main' },
        { src: '/static/images/icon_nav_toast.png', name: 'Toast', url: '/pages/toast/main' },
        { src: '/static/images/icon_nav_dialog.png', name: 'Dialog', url: '/pages/dialog/main' },
        { src: '/static/images/icon_nav_button.png', name: 'Progress', url: '/pages/progress/main' },
        { src: '/static/images/icon_nav_panel.png', name: 'Msg', url: '/pages/msg/main' },
        { src: '/static/images/icon_nav_article.png', name: 'Article', url: '/pages/acticle/main' },
        { src: '/static/images/icon_nav_actionSheet.png', name: 'ActionSheet', url: '/pages/actionsheet/main' },
        { src: '/static/images/icon_nav_icons.png', name: 'Icons', url: '/pages/icon/main' },
        { src: '/static/images/icon_nav_icons.png', name: 'Request', url: '/pages/request/main' }
      ]
    }
  },
  created() {
    getUserInfo().then((res) => {
      console.log('res', res)
    }).catch((err) => {
      console.log('err', err)
    });
  },
  methods: {
  },
}
</script>

<style lang="less" scoped>
.swiper-wrap {
  width: 100%;
  height: 400rpx;
  .swiper-img {
    width: 100%;
    height: 400rpx;
  }
}
</style>
