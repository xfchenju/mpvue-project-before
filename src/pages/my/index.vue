<template>
  <div id="my-container">
    <div class="my-info">
      <img class="my-info__faceImg" src="/static/images/banner.jpg" />
      <div class="my-info__userInfo">
        <span class="f14c1b">浮生未歇</span>
        <span class="f13c1">hello world</span>
      </div>
    </div>
    <div class="my-check mpv-cell-group">
      <div class="mpv-cell mpv-cell__hasArrow">
        <div class="mpv-cell-label f13c1">我的订单</div>
        <div class="mpv-cell-value f13c3"></div>
        <div class="mpv-cell-arrow">
          <img src="/static/images/arrow.png" alt="">
        </div>
      </div>
      <div class="mpv-cell mpv-cell__hasArrow">
        <div class="mpv-cell-label f13c1">我的账单</div>
        <div class="mpv-cell-value f13c3"></div>
        <div class="mpv-cell-arrow">
          <img src="/static/images/arrow.png" alt="">
        </div>
      </div>
      <div class="mpv-cell mpv-cell__hasArrow">
        <div class="mpv-cell-label f13c1">帮助与反馈</div>
        <div class="mpv-cell-value f13c3"></div>
        <div class="mpv-cell-arrow">
          <img src="/static/images/arrow.png" alt="">
        </div>
      </div>
    </div>
    <!-- <img class="swiper-img" src="/static/images/banner.jpg" /> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
    let app = getApp();
    console.log('app', app)
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/public/less/common.less';
@import '~@/assets/public/less/component.less';
#my-container {
  width: 100%;
  height: 100vh;
  background: #ececec;
  .my-info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 50rpx;
    box-sizing: border-box;
    width: 100%;
    height: 300rpx;
    background: #fff;
    color: #122222;
    .my-info__faceImg {
      width: 200rpx;
      height: 200rpx;
      border-radius: 50%;
      overflow: hidden;
    }
    .my-info__userInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start; 
      height: 200rpx;
    }
  }
  .my-check {
    width: 100%;
    height: calc(100% - 320rpx);
    background: #fff;
  }
}

</style>
