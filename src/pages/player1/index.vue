<template>
  <div class="wrapper">
    <div class="header">
      <div class="title">第一集：梦回长安</div>
      <div class="views-box">
        <img class="view-img" src="/static/images/index/ad2.jpg" alt="">
        <div class="view-con">
          <div class="views views1">
            <img class="view-ji" src="/static/player/voice.png" alt="">
            64.3万
          </div>
          <div class="views">
            <img class="view-vo" src="/static/player/line.png" alt="">
            194.6万
          </div>
        </div>
      </div>
      <div class="slider-box">
        <slider @touchstart="startHandle" @change="sliderChange" :value="myAudioPos" block-size='10' block-color='#e97b6a' backgroundColor="#d8d8d8" activeColor="#e97b6a"
        />
        <div class="time">
          <div class="current-time">{{myAudioCurrent}}</div>
          <div class="duration-time">{{myAudioDuration}}</div>
        </div>
      </div>
    </div>
    <div class="player-box">
      <div class="controls">
        <img class="prev" src="/static/player/prev.png" alt="">
        <img class="play" @tap="playHandle" v-show="!isPlay" src="/static/player/pause.png" alt="">
        <img class="pause" @tap="pauseHandle" v-show="isPlay" src="/static/player/play.png" alt="">
        <img class="next" src="/static/player/next.png" alt="">
      </div>
      <div class="like-box">
        <div class="item">
          <img class="prev" src="/static/player/list.png" alt=""><span>播放列表</span>
        </div>
        <div class="item">
          <img class="prev" src="/static/player/share.png" alt=""><span>373</span>
        </div>
        <div class="item">
          <img class="prev" src="/static/player/love.png" alt=""><span>1.1万</span>
        </div>
        <div class="item">
          <img class="prev" src="/static/player/comment.png" alt=""><span>5.3万</span>
        </div>
        <div class="item">
          <img class="prev" src="/static/player/zan.png" alt=""><span>3.2万</span>
        </div>
      </div>
    </div>
    <div class="collection-box">
      <img src="/static/images/index/ad2.jpg" alt="">
      <div class="title-number">
        <div class="title">寻迹古长安——古都城墙</div>
        <div class="number">7.5万人收藏</div>
      </div>
      <div class="collection">
        <span></span>
        <span>收藏</span>
      </div>
    </div>
    <div class="scroll-title">其他主播</div>
    <div class="scroll-content">
      <div class="leftgu">
        <img src="/static/images/left.png" alt="">
      </div>
      <scroll-view class="anchor-list" enable-flex="true" scroll-x="true" bindscroll="scroll" style="width: 100%">
        <div class="list">
            <div class="scroll-view-item">
              <img src="/static/images/index_icon4.png" alt="">
            </div>
            <div class="scroll-view-item">
              <img src="/static/images/vip.png" alt="">
            </div>
            <div class="scroll-view-item">
              <img src="/static/images/logo.png" alt="">
            </div>
            <div class="scroll-view-item">
              <img src="/static/images/vip.png" alt="">
            </div>
            <div class="scroll-view-item">
              <img src="/static/images/index_icon4.png" alt="">
            </div>
            <div class="scroll-view-item">
              <img src="/static/images/logo.png" alt="">
            </div>
            <div class="scroll-view-item">
              <img src="/static/images/vip.png" alt="">
            </div>
            <div class="scroll-view-item">
              <img src="/static/images/index_icon4.png" alt="">
            </div>
        </div>
      </scroll-view>
       <div class="leftgu">
          <img src="/static/images/right.png" alt="">
        </div>
    </div>
    <div class="introcon">
      <p class="intro-tit">主播 王洛 梦回长安精选</p>
      <p class="intro-con">西安城墙是中国现存规模最大、保存最完整的古代城垣。现存城墙为明代建筑，全长13.7千米，始建于明太祖洪武三年（1370年），洪武十一年（1378年）竣工，是在明太祖“高筑墙、广积粮、缓称王”的政策指导下，在隋、唐皇城的基础上建成的，当时是西安的府城。</p>
    </div>
    <div class="comment-box">
      <div class="all">
        <div class="title">
          <span>全部评论</span>
          <span>(177)</span>
        </div>
        <div class="btn">写评论</div>
      </div>
      <div class="comment-list">
        <div class="item">
          <div class="infor">
            <img src="/static/images/index_icon4.png" alt="">
            <div class="name-time">
              <div class="name">宝宝巴士</div>
              <div class="time">2020-4-22</div>
            </div>
            <div class="zan-box">
              <div class="zan">5</div>
              <img src="/static/player/zan.png" alt="">
            </div>
          </div>
          <div class="content">第一个评论</div>
          <div class="replay"></div>
        </div>
        <div class="item">
          <div class="infor">
            <img src="/static/images/index_icon4.png" alt="">
            <div class="name-time">
              <div class="name">宝宝巴士</div>
              <div class="time">2020-4-22</div>
            </div>
            <div class="zan-box">
              <div class="zan">5</div>
              <img src="/static/player/zan.png" alt="">
            </div>
          </div>
          <div class="content">第一个评论</div>
          <div class="replay"></div>
        </div>
        <div class="item">
          <div class="infor">
             <img src="/static/images/index_icon4.png" alt="">
            <div class="name-time">
              <div class="name">宝宝巴士</div>
              <div class="time">2020-4-22</div>
            </div>
            <div class="zan-box">
              <div class="zan">5</div>
              <img src="/static/player/zan.png" alt="">
            </div>
          </div>
          <div class="content">第一个评论</div>
          <div class="replay"></div>
        </div>
        <div class="item">
          <div class="infor">
             <img src="/static/images/index_icon4.png" alt="">
            <div class="name-time">
              <div class="name">宝宝巴士</div>
              <div class="time">2020-4-22</div>
            </div>
            <div class="zan-box">
              <div class="zan">5</div>
              <img src="/static/player/zan.png" alt="">
            </div>
          </div>
          <div class="content">第一个评论</div>
          <div class="replay"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isPlay: false, // 是否播放
      myAudioCurrent: '0', // 音频当前已播放时间
      myAudioDuration: '0', // 音频总时长
      myAudio: '', // 音频实例
      myAudioPos: 0 // 当前滑块的位置
    }
  },

  components: {
  },

  methods: {
    startHandle () {
      console.log('startHandle')
      this.myAudio.offTimeUpdate() // 取消事件 防止和slider滑动位置出现跳动问题
    },
    // 滑块滑动完成事件
    sliderChange (e) {
      // 当前slider滑动的距离
      const position = e.target.value
      // 根据滑动位置计算出当前所对应的时间
      let currentTime = position / 100 * this.myAudio.duration
      // 跳转到指定位置 单位s秒
      console.log(currentTime, 'currentTime')
      this.myAudio.seek(currentTime)
      console.log(this.myAudio.currentTime, 'this.myAudio.currentTime')
      this.updateTime()
    },
    // 播放
    playHandle () {
      // 考虑到进度条被拖动，不一定从00:00:00开始 当前开始播放的时间
      this.myAudio.startTime = this.myAudioCurrent
      // 播放
      this.myAudio.play()
      this.isPlay = true
      this.updateTime()
    },
    updateTime () {
      // 进度条变化
      this.myAudio.onTimeUpdate(() => {
        // 更新滑块位置
        this.myAudioPos = this.myAudio.currentTime / this.myAudio.duration * 100
        // 更新当前已播放时间
        this.myAudioCurrent = this.format(this.myAudio.currentTime)
      })
    },
    // 暂停
    pauseHandle () {
      this.myAudio.pause()
      this.isPlay = false
    },
    // 时间格式化
    format (t) {
      let time = Math.floor(t / 60) >= 10 ? Math.floor(t / 60) : '0' + Math.floor(t / 60)
      t = time + ':' + ((t % 60) / 100).toFixed(2).slice(-2)
      return t
    }
  },

  created () {
    this.myAudio = wx.createInnerAudioContext()
    this.myAudio.src = 'http://mp3.9ku.com/mp3/3/2943.mp3'
    // http://mp3.9ku.com/hot/2004/07-13/6705.mp3
    // http://mp3.9ku.com/hot/2005/08-11/68772.mp3
    // http://mp3.9ku.com/mp3/1/234.mp3
    // http://mp3.9ku.com/mp3/1/236.mp3
    this.myAudio.title = 'Cannon'
    console.log(this.myAudio)
    // 在onCanplay里获取并设置音频时长和播放进度
    this.myAudio.onCanplay(() => {
      // eslint-disable-next-line
      this.myAudio.duration // 必须写，不然获取不到。。。
      setTimeout(() => {
        this.myAudioDuration = this.format(this.myAudio.duration) // 总时长
        this.myAudioCurrent = this.format(this.myAudio.currentTime) // 当前已播放时间
      }, 1000)
    })

    // 播放完成处理，按钮变一下
    this.myAudio.onEnded((res) => {
      this.myAudioPos = 0
      this.myAudioCurrent = '00:00'
      this.isPlay = false
    })
  }
}
</script>

<style scoped lang='scss'>
.wrapper{
  background: #f4f4f4;
  .header{
    .title{
      font-size: 40rpx;
      font-weight: bold;
      text-align: center;
      padding: 40rpx 0;
    }
  }
  .views-box{
    border-radius: 10rpx;
    width: 300rpx;
    height: 300rpx;
    overflow: hidden;
    margin: 0 auto 20rpx;
    position: relative;
    .view-img{
      width: 100%;
      height: 100%;
    }
    .view-con{
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      background: rgba(0,0,0,.5);
      width: 100%;
    }
    .view-ji,.view-vo{
      width: 30rpx;
      height: 30rpx;
      vertical-align: middle;
    }
    .view-ji{
      margin-top: -6rpx;
    }
    .views{
      flex:1;
      font-size: 24rpx;
      text-align: right;
      padding-right: 10rpx;
      line-height: 50rpx;
      height: 50rpx;
      color: #fff;
      box-sizing: border-box;
      padding-left: 10rpx;
    }
    .views1{
      text-align: left;
    }
  }
  .player-box{
    background: #fff;
    padding-top: 50rpx;
    .controls{
      height: 90rpx;
      display: flex;
      justify-content: space-between;
      padding:0 225rpx;
      align-items: center;
    }
    .next,.prev{
      width: 50rpx;
      height: 45rpx;
    }
    .play, .pause{
      width: 75rpx;
      height: 86rpx;
    }
  }
  .slider-box{
    padding-bottom: 10rpx;
    .time{
      display: flex;
      justify-content: space-between;
      padding: 0 36rpx;
      font-size: 28rpx;
      margin-top: -20rpx;
    }
  }
  .like-box{
    display: flex;
    justify-content: center;
    padding: 20rpx 0;
    .item{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 20rpx;
      font-size: 22rpx;
      color: #bbb;
      img{
        width: 40rpx;
        height: 40rpx;
        margin-bottom: 6rpx;
      }
    }
  }
  .collection-box{
    margin-top: 12rpx;
    padding: 0 20rpx;
    height: 160rpx;
    background: #fff;
    display: flex;
    align-items: center;
    img{
      width: 120rpx;
      height: 120rpx;
      margin-right: 30rpx;
    }
    .title-number{
      display: flex;
      flex-direction: column;
      .title{
        font-size: 32rpx;
        color: #333;
      }
      .number{
        font-size: 30rpx;
        margin-top: 20rpx;
        color: #999;
      }
    }
    .collection{
      margin-left: auto;
      width: 150rpx;
      color: #f86342;
      font-size: 30rpx;
      line-height: 60rpx;
      text-align: center;
      background: #ffece8;
      border-radius: 30rpx;
    }
  }
  .scroll-title {
    background-color: #fff;
    width: 100%;
    padding:10rpx 0 0 20rpx;
    font-size: 35rpx;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #333;
  }
  .scroll-content {
    display: flex;
    padding-top: 20rpx;
    padding-bottom: 20rpx;
    margin-bottom: 12rpx;
    box-sizing: border-box;
    background-color: #fff;
  }
  .anchor-list {
    width: 88%!important;
    .list {
      width: 100%;
      height: 120rpx;
      display: flex;
      justify-content: space-between;
    }
    .scroll-view-item {
      width: 20%;
      height: 120rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      img {
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
      }
    }
  }
  .leftgu {
    width: 6%;
    background-color: #fff;
    height: 120rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    img{
      width: 30rpx;
      height: 40rpx;
    }
  }
  .introcon{
    background: #fff;
    padding: 20rpx;
    margin-bottom: 12rpx;
    p{
      font-size:30rpx;
    }
    .intro-tit{
      color:#333;
      padding-bottom: 30rpx;
    }
    .intro-con{
      color:#999;
      line-height: 40rpx;
    }
  }
  .comment-box{
    background: #fff;
    padding: 40rpx 20rpx;
    .all{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title{
        font-weight: bold;
        font-size:30rpx;
      }
    }
    .btn{
      border: 1px solid orangered;
      color: orangered;
      border-radius: 50rpx;
      line-height: 50rpx;
      font-size: 28rpx;
      padding: 0 20rpx;
    }
  }
  .comment-list{
    margin-top: 30rpx;
    .item{
      margin-bottom: 30rpx;
      .infor{
        display: flex;
        align-items: center;
        img{
          width: 60rpx;
          height: 60rpx;
        }
        .zan-box{
          margin-left: auto;
          display: flex;
          align-items: center;
          font-size: 24rpx;
          color: #999;
          .zan{
            margin-right: 10rpx;
          }
          img{
            width: 36rpx;
            height: 36rpx;
          }
        }
        .name-time{
          margin-left: 20rpx;
          .name{
            font-size: 26rpx;
            color: #666;
          }
          .time{
            font-size: 24rpx;
            color: #999;
          }
        }
      }
    }
    .content{
      padding:20rpx 0 20rpx 76rpx;
      font-size: 28rpx;
      border-bottom: 1px solid #dddddd;
    }
  }
}
::-webkit-scrollbar{
  width: 0;
  height: 0;
  color: transparent;
}
</style>
