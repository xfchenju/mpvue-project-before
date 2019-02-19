<template>
  <div id="test">
    <van-cell-group>
      <van-field
        :value="username"
        label="用户名"
        type="digit"
        placeholder="请输入用户名"
        input-align="right"
        clearable
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
      this.date = e.mp.detail.value;
    }
  }
}
</script>

<style>
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
</style>
