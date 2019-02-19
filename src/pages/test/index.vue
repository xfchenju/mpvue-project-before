<template>
  <div id="test">
    <div class="mvp-mt-line"></div>
    <van-cell-group class="mvp-mt">
      <van-cell
        title="单元格"
        value="内容"
      />
      <van-cell
        title="单元格"
        value="内容"
      />
      <van-cell
        title="单元格"
        value="内容"
        :border="false"
      />
    </van-cell-group>
    <div class="mvp-mt-line"></div>
    <van-cell-group class="mvp-mt">
      <van-field
        :value="username"
        left-icon="contact"
        label="用户名"
        type="digit"
        placeholder="请输入用户名"
        input-align="right"
        maxlength="10"
        :error="userErr"
        :error-message="userErrMsg"
        @blur="blurInput"
        @input="bindInput"
      />
      <picker @change="bindPickerChange" :value="date" :range="array">
        <van-cell
          title="单元格"
          :value="date != null ? array[date] : '请选择'"
          is-link
        />
      </picker>
      <picker @change="bindPickerChange" :value="date" :range="array">
        <van-cell
          title="单元格"
          :value="date != null ? array[date] : '请选择'"
          is-link
        />
      </picker>
      <van-cell
        title="单元格"
        value="内容"
        :border="false"
      />
    </van-cell-group>
    <div class="mvp-btns-group">
      <van-button custom-class="mvp-main-btn" type="primary" @click="onSubmit" :disabled="isComplate">提交</van-button>
      <van-button custom-class="mvp-main-btn" type="default">取消</van-button>
    </div>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import Toast from '@/../static/vant/toast/toast';
export default {
  data () {
    return {
      username: null,
      date: null,
      array: ['A', 'B', 'C'],
      userErr: false,
      userErrMsg: null
    }
  },
  computed: {
    isComplate() {
      return !(this.username != null && !this.userErr);
    }
  },
  created () {
    
  },
  methods: {
    onSubmit() {
      if(this.isComplate) {
        return false;
      }
      if(!this.username) {
        this.userErr = true;
        this.userErrMsg = '用户名不能为空！';
      }else {
        this.userErr = false;
        this.userErrMsg = null;
        Toast({
          type: 'success',
          message: '提交成功'
        })
      }
    },
    bindInput(e) {
      console.log(e)
      this.username = e.mp.detail;
    },
    blurInput() {
      console.log(this.username, 'username');
      if(!this.username) {
        this.userErr = true;
        this.userErrMsg = '用户名不能为空！';
      }else {
        this.userErr = false;
        this.userErrMsg = null;
      }
    },
    bindPickerChange(e) {
      console.log(e, 'e')
      this.date = e.mp.detail.value;
    },
    bandPickerCancel(e) {
      console.log(e, 'e')
      if(this.date == null) {
        Toast({
          type: 'warn',
          message: '请选择！'
        })
      }
    }
  }
}
</script>

<style lang="less">
#test {
  .mvp-mt-line {
    width: 100%;
    height: 20rpx;
    background: #F8F8F8;
  }
  .mvp-mt {
    margin-top: 20rpx !important;
    margin-bottom: 20rpx !important;
    &:after {
      content: " ";
      width: 100%;
      height: 20rpx;
      background: #F8F8F8;
    }
  }
  .van-button.mvp-main-btn {
    margin-top: 20rpx;
    width: 100% !important;
  }
  .mvp-btns-group {
    margin: 0 auto;
    width: calc(100% - 60rpx);
  }
  .van-field__error-message {
    text-align: right !important;
  }
}
</style>
