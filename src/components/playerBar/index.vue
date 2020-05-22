<template>
<div>
  <div class="playerBar"  v-if="playing.id">
    <div @tap='toDtail' class='player'>
      <image v-if="playing.cover" style="animation: rotateImg 4s infinite linear" class='avatar_img' :src="playing.cover" />
      <div class="info">
        <div class='name ellipsis'>{{playing.title}}阿打算阿萨达十大阿萨达撒大所大阿萨达</div>
        <div class='singer'>{{playing.singer}} {{playing.duration}}</div>
      </div>
      <div class="controls">
          <img class="pause" @tap.stop="playAudio" v-show="!audioStatus" src="/static/player/pause.png" alt="">
          <img class="play" @tap.stop="pauseAudio" v-show="audioStatus" src="/static/player/play.png" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    data () {
      return {
        isPlay: false,
        percent: 0
      }
    },
    computed: {
      ...mapState(['audioDom', 'playing', 'audioStatus'])
    },
    methods: {
      ...mapActions(['updateAudioStatus']),
      pauseAudio () {
        // this.isPlay = false
        this.updateAudioStatus(false)
        this.audioDom.pause()
      },
      playAudio () {
        // this.isPlay = true
        this.updateAudioStatus(true)
        this.audioDom.play()
      },
      toDtail () {
        let { id } = this.playing
        wx.navigateTo({
          url: `/pages/player/main?id=${id}`
        })
      }
    },
    onShow () {
      console.log(this.audioDom.paused, '11111')
    }
  }
</script>

<style lang="scss" scoped>
.playerBar{
  width: 90%;
  padding: 12rpx 10rpx;
  border-radius: 6rpx;
  box-sizing: border-box;
  position: fixed;
  z-index: 9999;
  background: #8c9093;
  bottom: 20rpx;
  left:5%;
  .player{
    display: flex;
    align-items: center;
    .avatar_img{
      width: 75rpx;
      height: 75rpx;
      margin-right: 20rpx;
      border-radius: 6rpx;
    }
  }
  .controls{
    width: 64rpx;
    height: 64rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 6rpx solid #fff;
    margin-left: auto;
    img{
      width: 30rpx;
      height: 30rpx;
    }
  }
  .info{
    width: 490rpx;
    color:#fff;
    font-size: 26rpx;
    .name{
      margin-bottom: 8rpx;
    }
  }
}

</style>
