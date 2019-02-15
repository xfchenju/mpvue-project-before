<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Request</div>
      <div class="page__desc">网络请求，可以使用小程序原生 wx.request 进行操作，也可以使用第三方 flyio 网络库，本示例是基于 flyio 网络库。</div>
    </div>
    <div class="page__bd">
      <div class="weui-btn-area">
        <button class="weui-btn mini-btn" type="primary" size="mini" @click="_getUserInfo()">测试</button>
      </div>
      <div class='content-list' v-if="resContent">
        <div v-for="(item, index) in resContent" :key="index">
          <span>carsId：{{item.carsId}}</span><br/>
          <span>carsImg：{{item.carsImg}}</span><br/>
          <span>carsName：{{item.carsName}}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { getUserInfo } from '@/http/api';
export default {
  data() {
    return {
      resContent: null,
    }
  },
  methods: {
    _getUserInfo: function() {
      wx.showLoading({
        title: '加载中',
        mask: true
      })
      getUserInfo().then((res) => {
        wx.hideLoading();
        this.resContent = res.data.data;
      }).catch((err) => {
        wx.hideLoading();
        this.resContent = err;
      });
    }
  }
}
</script>

<style>
.content-list {
  background-color: #fff;
  z-index: 1;
  position: relative;
}
.list-item {
  height: 180rpx;
  width: 100%;
  box-sizing: border-box;
}
.list-item-content {
  padding: 20rpx 30rpx 20rpx 30rpx;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
  box-sizing: border-box;
}
.list-item-left {
  height: 140rpx;
  width: 186rpx;
  margin-right: 20rpx;
  float: left;
}
.list-item-left image {
  width: 100%;
  height: 100%;
}
.list-item-right {
  float: left;
  width: 484rpx;
  height: 140rpx;
  position: relative;
}
.article-title {
  font-size: 14px;
  color: #404040;
  text-align: justify;
  height: 86rpx;
  overflow-y: hidden;
}
.article-source::before {
  content: "作者:";
  font-size: 12px;
  color: #888;
  margin-right: 10rpx;
}
.article-source {
  font-size: 12px;
  color: #888;
  position: absolute;
  bottom: 0;
  right: 0;
}
.article-editTime {
  font-size: 12px;
  color: #a8a8a8;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
