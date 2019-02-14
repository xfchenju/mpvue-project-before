<template>
  <div>
    <div class="weui-cells__title">带图标、说明的列表项</div>
    <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <image :src="icon" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
          </div>
          <div class="weui-cell__bd">标题文字</div>
          <div class="weui-cell__ft">说明文字</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <image :src="icon" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
          </div>
          <div class="weui-cell__bd">标题文字</div>
          <div class="weui-cell__ft">说明文字</div>
        </div>
    </div>
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
    <div>
      <a class="action-box" href="/pages/counter/main">
        跳转
      </a>
    </div>
    <button type="primary" @click="openCamera">打开相机</button>
    <button type="warn" @click="closeCamera">关闭相机</button>
    <camera class="camera-view" device-position="back" flash="off" v-if="isCameraOpen"></camera>
    <button type="primary" @click="takePhoto">拍照</button>
    <div>预览</div>
    <image mode="widthFix" :src="src"></image>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png',
        imgUrls: [
          'http://mpvue.com/assets/logo.png',
          'http://mpvue.com/assets/logo.png'
        ]
      },
      src: null,
      isCameraOpen: false
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    takePhoto() {
      const ctx = wx.createCameraContext()
      ctx.takePhoto({
        quality: 'high',
        success: (res) => {
          this.src = res.tempImagePath;
        }
      })
    },
    openCamera() {
      this.isCameraOpen = true;
    },
    closeCamera() {
      this.isCameraOpen = false;
    }
  },

  created () {
    let app = getApp()
  }
}
</script>

<style lang="less" scoped>
.swiper-wrap {
  width: 100%;
  height: 400rpx;
  
}
.swiper-img {
    width: 100%;
    height: 400rpx;
  }
  .camera-view {
    width: 100%;
    height: 400rpx;
  }
</style>
