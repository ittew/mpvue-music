<template>
  <div>
    <div class="toptitlebar">
      <!-- 背景虚化层 -->
      <div class="bg" :style="{'background-image':'url('+imgurl+')','background-size': '100% 100%', 'background-repeat': 'no-repeat'}"></div>
      <!-- 内容 -->
      <div class="baritem" v-for="(item, index) in performanceInfo" :key="index">
        <div class="baritemtop" @tap="goPerachor">
          <div class="themebgimg" :style="{'background-image':'url('+item.imgurl+')','background-size':'100% 100%'}"></div>
          <div class="themeinfo">
            <div class="themetitle">{{item.title}}</div>
            <div class="themeauthor">
              <img src="/static/images/index_icon4.png" alt="">
              <span class="nickname">走进主播>>{{item.author}}</span>
            </div>
            <div class="viewinfo">
              <div class="viewinfoleft">{{item.num1}}人收藏</div>
              <span class="viewinfomid">|</span>
              <div class="viewinforight">已更新{{item.num2}}期</div>
            </div>
          </div>
        </div>
        <div class="baritembottom">
          <button class="sharebut"><span class="icon-share"></span> 分享</button>
          <button class="collection" :class="{'active':!isCollection}" @tap="collectionHandle"><span class="icon-add"></span>{{isCollection?'已收藏':'收藏'}}</button>
        </div>
      </div>
    </div>
    <!-- 顶部选项 -->
    <div class="Performance">
      <div class="selectbar">
        <div class="detail" :class="{'active': currentIndex == 1}" @tap="currentIndex = 1">详情</div>
        <div class="list" :class="{'active': currentIndex == 2}" @tap="currentIndex = 2">节目<span>152</span></div>
      </div>
      <div class="tabs-box">
        <div class="detail-box" v-show="currentIndex == 1">
          <p class="indentation">各位游客，现在我们看到的西安城墙，是中国历史上最著名的城垣建筑之一。它从明洪武三年(公元1370年)朱元璋下诏修城开始动工，至洪武十一年(公元1378年)完工，历时8年，是在隋唐京城皇城的基础上扩筑而成的，经过历代修葺，基本上保持着完整的封建社会城垣建筑的面貌，反映了中国古代筑城技术的杰出成就。</p>
　　      <p class="indentation">西安城墙周长11.9千米，其中东城墙2590米，西城墙2631.2米，南城墙3441.6米，北城墙3241米。这样的规模在国内外都是比较少见 的。</p>
　　       <p class="indentation">大家看见城墙四门外筑有护卫城门的小城，那叫瓮城。所谓瓮城，意为敌人一旦进入，就会受到瓮城城墙上面的四面夹击，犹如瓮中之 鳖，无法逃脱。瓮城外还筑有拱卫瓮城的小城，古称羊马城。</p>
          <p class="entercon">点击更多></p>
          <image :src="imgurl" alt="" />
        </div>
        <div class="list-box" v-show="currentIndex == 2">
          <!-- 播放选项 -->
          <div class="play">
            <div class="playall">
              <span class="icon-video"></span> 播放全部
            </div>
            <div class="playselect">
              <div style="margin-right:20rpx"><span class="icon-order"></span> 正序</div>
              <div><span class="icon-list"></span> 选集</div>
            </div>
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
      </div>
    </div>
    <!-- 播放条  -->
    <PlayerBar v-if="playing.id"></PlayerBar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PlayerBar from '@/components/playerBar/index'
export default {
  data () {
    return {
      currentIndex: '2',
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
      ],
      performanceInfo: [
        {
          imgurl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587822989351&di=32a4d1fd9ef8ffe2c292c2083573bdbf&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg',
          title: '寻迹古长安——古都城墙',
          author: '王洛',
          num1: '767.6万',
          num2: '257'
        }
      ],
      imgurl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587822989351&di=32a4d1fd9ef8ffe2c292c2083573bdbf&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg',
      isCollection: false
    }
  },
  computed: {
    ...mapState(['playing'])
  },
  components: {
    PlayerBar
  },

  methods: {
    collectionHandle () {
      this.isCollection = !this.isCollection
      wx.showToast({
        title: this.isCollection ? '收藏成功' : '取消收藏',
        mask: true,
        duration: 1000
      })
    },
    goPlayer (item) {
      console.log(item)
      wx.navigateTo({
        url: '/pages/player/main?id=1'
      })
    },
    // 跳转个人主播页面
    goPerachor () {
      wx.navigateTo({
        url: '/pages/perAnchor/main'
      })
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped lang='scss'>
.toptitlebar {
  width: 100%;
  height: 410rpx;
  overflow: hidden;
  position: relative;
}
/* 背景虚化层 */
.bg{
  width: 100%;
  height: 410rpx;
  -webkit-filter:blur(30rpx);
  filter: blur(30rpx);
}
.baritem {
  width: 100%;
  height: 400rpx;
  margin-top: 50rpx;
  padding: 20rpx 0rpx;
  position: absolute;
  top: 0rpx;
}

.baritemtop {
  width: 100%;
  height: 200rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}

.themebgimg {
  width: 200rpx;
  height: 200rpx;
  margin-right: 30rpx;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.themeinfo {
  width: 60%;
}

.themetitle {
  color: #fff;
  font-size: 36rpx;
  display: -webkit-box;
  -webkit-line-clamp: 2;/*行数n*/
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.themeauthor {
  display: flex;
  font-size: 30rpx;
  color: #fff;
  margin: 10rpx 0;
  .nickname{
    margin:0 8rpx;
  }
  img{
    width: 40rpx;
    height: 40rpx;
    border-radius: 50%;
  }
}

.viewinfo {
  color: #fff;
  font-size: 30rpx;
  margin-top: 5rpx;
  display: flex;
  justify-content: flex-start;
}

.viewinfoleft {
  margin-right: 5rpx;
}

.viewinforight {
  margin-left: 5rpx;
}

.baritembottom {
  width: 70%;
  display: flex;
  align-items: center;
  border-radius: 20rpx;
  float: right;
  margin-top: 24rpx;
  button {
    width: 210rpx;
    height: 64rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30rpx;
    color: #fff;
    border-radius: 16rpx;
  }
  .sharebut {
    background: transparent;
    border: 1rpx solid #fff;
    margin-left: 44rpx;
  }
  .collection {
    color: #333;
    background: #fff;
    &.active{
      background: #ff520f;
      color: #fff;
    }
  }
}

.Performance {
  width: 100%;
  height: 500rpx;
  border-top-left-radius: 20rpx;
  border-top-right-radius: 20rpx;
  position: relative;
  top: -10rpx;
}
.selectbar {
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  text-align: center;
  display: flex;
  justify-content: space-between;
  background: #fff;
  box-sizing: border-box;
  color: #aaa;
  border-radius: 15rpx;
  border-bottom: 1rpx solid #f1f1f1;
}

.detail {
  width: 50%;
}

.list {
  width: 50%;
  span{
    font-size: 32rpx;
  }
}

.play {
  width: 100%;
  height: 100rpx;
  padding: 0rpx 30rpx;
  box-sizing: border-box;
  border-bottom: 1rpx solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.playall {
  width: auto;
  text-align: center;
  font-size: 30rpx;
}

.playselect {
  width: auto;
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 30rpx;
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
.detail-box{
  padding: 36rpx;
  font-size: 32rpx;
  .indentation {
    text-indent:2em;
  }
  .entercon{
    font-size: 28rpx;
    text-align: right;
    padding-right: 30rpx;
    padding-bottom: 30rpx;
    color: #333;
  }
  image{
    max-width: 100%;
    margin: 10rpx 0;
  }
}
</style>
