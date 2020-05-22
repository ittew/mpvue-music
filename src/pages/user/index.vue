<template>
  <div class="main">
      <div class="body">
      <div class="topBar">
        <!-- 头像昵称 -->
        <div class="userImg">
          <div class="avatar_nickname">
            <div class="avatar">
              <image class="avatarImg" :src="userInfo.avatarUrl?userInfo.avatarUrl:'/static/images/logo.png'"></image>
            </div>
            <div class="nickname">
              <text :class="userInfo.nickName?'logins':'hidden'">{{userInfo.nickName?userInfo.nickName:""}}</text>
              <button open-type="getUserInfo" @getuserinfo="handleGetUserInfo" :class="userInfo.nickName?'hidden':'login'">微信登录</button>
              <!-- vip勋章 -->
              <img :class="userInfo.nickName?'icon-vip':'hidden'" src="../../../static/images/vip.png"/>
              <span class="jifen">积分：564</span>
            </div>
          </div>
          <div class="kefu"><text class="icon-service"></text>客服服务</div>
        </div>
      </div>
      <div class="chioce">
        <div class="choiceItem">
          <text style="margin-left:20rpx">我的优惠券</text>
          <text class="icon-right text-gray">></text>
        </div>
        <div @tap="gotoCollect" class="choiceItem">
          <text style="margin-left:20rpx">我的收藏</text>
          <text class="icon-right text-gray">></text>
        </div>
        <div class="choiceItem">
          <text style="margin-left:20rpx">意见反馈</text>
          <text class="icon-right text-gray">></text>
        </div>
        <div class="choiceItem">
          <text style="margin-left:20rpx">退出登录</text>
          <text class="icon-right text-gray">></text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      setData: '',
      loginbo: true,
      userInfo: {},
      img: '/static/images/logo.png'
    }
  },

  components: {
  },
  onLoad () {
    wx.getUserInfo({
      success: res => {
        console.log(res)
        this.userInfo = res.userInfo
      }
    })
  },
  methods: {
    // 跳转收藏页面
    gotoCollect () {
      wx.navigateTo({
        url: '/pages/collection/main'
      })
    },
    handleGetUserInfo (res) {
      console.log(res)
      if (res.mp.detail.userInfo) {
        this.userInfo = res.mp.detail.userInfo
      }
    }
  }
}
</script>

<style lang="scss">
page {
  background-color: #f1f1f1;
  height: 100%;
}

.topBar {
    width: 100%;
    height: 200rpx;
    background-color: #fff;
}

.userImg {
    width: 95%;
    height: 200rpx;
    margin: 0rpx auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

}

.avatar_nickname {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
}

.login {
  display: inline-block;
  background-color: #fff;
  height: 60rpx;
  vertical-align: middle;
  line-height: 60rpx;
  max-width: 200rpx;
  font-size: 30rpx;
  margin-right: 10rpx;
}
login::after {
  border: none;
}
.plain {
  border: none;
  border-color: transparent;
}
.logins {
  font-size: 35rpx;
  color: #666;
}

.hidden {
  display: none;
}

.icon-right {
  color: #666;
}

.jifen {
  font-size: 27rpx;
  color: #666;
}

.icon-vip {
  width: 35rpx;
  height: 35rpx;
  margin: 0 35rpx 0 10rpx;
  vertical-align: middle;
}

.avatar {
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
    vertical-align: middle;
}

.avatarImg {
    width: 110rpx;
    height: 110rpx;
    border-radius: 50%;
}

.nickname {
    margin-left: 20rpx;
}

.kefu {
    width: 160rpx;
    height: 50rpx;
    font-size: 25rpx;
    border-radius: 25rpx;
    outline: none;
    text-align: center;
    line-height: 50rpx;
    background-color: #f1f1f1;
}

/* 选项卡 */
.chioce {
    width: 100%;
    height: auto;
    background-color: #fff;
    margin-top: 10rpx;
    font-size: 32rpx;
}

.choiceItem {
    display: flex;
    width: 90%;
    height: 60rpx;
    padding: 20rpx 30rpx;
    justify-content: space-between;
    align-items: center;
}

::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
}
</style>
