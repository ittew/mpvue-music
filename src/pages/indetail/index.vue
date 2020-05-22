<template>
  <div>
    <div class="detail-box">
      <image :src="imgurl" alt="" />
      <p class="detailtext">西安城墙是中国现存规模最大、保存最完整的古代城垣。现存城墙为明代建筑，全长13.7千米，始建于明太祖洪武三年（1370年），洪武十一年（1378年）竣工，是在明太祖“高筑墙、广积粮、缓称王”的政策指导下，在隋、唐皇城的基础上建成的，当时是西安的府城。明太祖朱元璋将次子朱樉册封为秦王，藩封、府治同在一城，因而城池规模宏大坚固，再加上后来明清屡次修葺、增建，至今保存完好......</p>
      <p class="entercon">点击更多></p>
    </div>
    <div class="detailtit">推荐主播</div>
    <div class="performanceContent" v-for="(item, index) in performance" :key="index" @tap="goPlayer(item)">
      <img class="performanceIndex" src="../../../static/images/index_icon4.png"/>
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
          name: '《西安钟楼》菲菲',
          year: '3年前',
          count: '2303万',
          time: '21:53'
        },
        {
          name: '《潼关古城》胡一天',
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
          name: '《西安钟楼》菲菲',
          year: '3年前',
          count: '456.2万',
          time: '28:51'
        },
        {
          name: '《潼关古城》胡一天',
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
          name: '《西安钟楼》胡一天',
          year: '3年前',
          count: '101.3万',
          time: '21:57'
        }
      ],
      imgurl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587822989351&di=32a4d1fd9ef8ffe2c292c2083573bdbf&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg'
    }
  },

  components: {},

  methods: {
    goPlayer (item) {
      console.log(item)
      wx.navigateTo({
        url: '/pages/detail/main'
      })
    }
  }
}
</script>

<style scoped lang='scss'>

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
  width: 80rpx;
  height: 80rpx;
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
.detailtit{
  font-size: 35rpx;
  color: #333;
  padding: 0 0 10rpx 25rpx;
}
.detail-box{
  padding: 36rpx 36rpx 0 36rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .detailtext{
    text-indent: 2em;
    line-height: 45rpx;
    font-size: 30rpx;
  }
  .entercon{
    font-size: 28rpx;
    text-align: right;
    padding-right: 30rpx;
    padding-bottom: 30rpx;
    color: #333;
  }
  image{
    width: 680rpx;
    height: 480rpx;
    margin-bottom: 30rpx;
  }
}
</style>
