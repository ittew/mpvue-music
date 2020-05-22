<template>
  <div class="enjoy-listening">
      <div class="poster">
        <img src="/static/images/play.png" alt="">
      </div>
      <!-- 节目列表 -->
      <div class="performanceContent" v-for="(item, index) in performance" :key="index" @tap="goPlayer(item)">
        <!-- 序号 -->
        <div class="performanceIndex">{{index+1}}</div>
        <!-- 节目标题 -->
        <div class="performanceInfo">
          <div class="performanceInfoTop">
            <div style="font-size:33rpx">{{item.name}}</div>
            <div style="color:#aaaaaa">{{item.year}}</div>
          </div>
          <!-- 播放次数和时间 -->
          <div class="performanceInfoBottom">
            <div><img class="voiimg" src="../../../static/images/voice.png">{{item.count}}</div>
            <div style="margin-left:20rpx"><span class="icon-time"></span>{{item.time}}</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      performance: [
        {
          name: '《梦长安》王洛',
          year: '2年前',
          count: '5601.9万',
          time: '34:36'
        },
        {
          name: '《西安钟楼》王洛',
          year: '3年前',
          count: '2303万',
          time: '21:53'
        },
        {
          name: '《潼关古城》王洛',
          year: '1个月前',
          count: '876.5万',
          time: '14:47'
        },
        {
          name: '《梦长安》王洛',
          year: '1年前',
          count: '601.6万',
          time: '37:38'
        },
        {
          name: '《西安钟楼》王洛',
          year: '3年前',
          count: '456.2万',
          time: '28:51'
        },
        {
          name: '《潼关古城》王洛',
          year: '2个月前',
          count: '301.7万',
          time: '24:47'
        },
        {
          name: '《梦长安》王洛',
          year: '2年前',
          count: '287.6万',
          time: '64:33'
        },
        {
          name: '《西安钟楼》王洛',
          year: '3年前',
          count: '101.3万',
          time: '21:57'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
  .poster {
    width: 90%;
    height: 320rpx;
    margin: 0 auto;
    border-radius: 20rpx;
    background: url('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1684479773,9307292&fm=26&gp=0.jpg') no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100rpx;
      height: 100rpx;
    }
  }
 .performanceContent {
  width: 100%;
  height: 150rpx;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1rpx solid #f1f1f1;
  padding: 20rpx 30rpx 20rpx 20rpx;
}

.performanceIndex {
  width: 12%;
  height: 80rpx;
  text-align: center;
  line-height: 80rpx;
  color: #aaa;
}

.performanceInfo {
  width: 88%;
  height: 100%;
}

.performanceInfoTop {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  font-size: 30rpx;
}

.performanceInfoBottom {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  color: #aaa;
  font-size: 25rpx;
  margin-top: 20rpx;
  vertical-align: middle;
  .voiimg {
    width: 30rpx;
    height: 26rpx;
    margin-right: 10rpx;
    margin-left: 10rpx;
    margin-top: -6rpx;
    vertical-align: middle;
  }
}
.Performance .active{
  position: relative;
  color: #ff520f;
}
.Performance .active::after{
  content: '';
  width: 80rpx;
  height: 5rpx;
  position: absolute;
  bottom: 0rpx;
  left: 150rpx;
  background-color: #ff520f;
}
</style>
