<template>
  <div class="main">
    <div class="gotoIndex"></div>
    <div class="backcon" @tap="gotoIndexpage">
      <img src="../../../static/images/back.png"/>
      <span>首页</span>
    </div>
    <div class="top">
      <img class="topimg" src="../../../static/images/index_icon4.png"/>
      <p class="toptit">寻迹古长安——古都城墙</p>
      <p class="topfu">月度优质主播</p>
      <div class="topno"><span class="topno_l">关注 12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="topbor">|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="topno_r">&nbsp;&nbsp;&nbsp;粉丝 1256.2万</span></div>
    </div>
    <div class="content">
      <p class="contitle">专辑作品</p>
      <div class="content-item" @tap="gotoDetails" v-for="(item,index) in currentList" :key="index">
        <image :src="item.albumCoverUrl290"></image>
        <div class="content-left">
          <div class="content-title">{{item.title}}</div>
          <div class="content-text">{{item.trackTitle}}</div>
          <div class="count">
            <div style="margin-right:25rpx;">
              <!-- 本例中33.2亿的单位是写死的，此处应该是后端返回数据吧 -->
              <text class="icon-video"></text>
              <text class="">33.2亿</text>
            </div>
            <div>
              <text class="icon"></text>
              <text class="">44集</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentList: [],
      listData: [
        {
          'hotRecommends': {
            'list': [
              {
                'albumCoverUrl290': '/static/images/list/list1.jpg',
                'title': '西安钟楼',
                'trackTitle': '中国古代遗留的形制最大、保存最完整的一座钟楼，每天都有6场编钟表演。'
              },
              {
                'albumCoverUrl290': '/static/images/list/list2.jpeg',
                'title': '西安小雁塔',
                'trackTitle': '环境清幽，经受了1200多年风雨的侵袭和70余次地震的考验，历史上曾经历过三次离合。'
              },
              {
                'albumCoverUrl290': '/static/images/list/list3.jpg',
                'title': '西安城墙',
                'trackTitle': '古城墙历史悠久，登上城墙，感受到了历史的魅力，城墙很宽阔，俯瞰西安城很不错！'
              },
              {
                'albumCoverUrl290': '/static/images/list/list1.jpg',
                'title': '西安钟楼',
                'trackTitle': '中国古代遗留的形制最大、保存最完整的一座钟楼，每天都有6场编钟表演。'
              },
              {
                'albumCoverUrl290': '/static/images/list/list2.jpeg',
                'title': '西安小雁塔',
                'trackTitle': '环境清幽，经受了1200多年风雨的侵袭和70余次地震的考验，历史上曾经历过三次离合。'
              },
              {
                'albumCoverUrl290': '/static/images/list/list3.jpg',
                'title': '西安城墙',
                'trackTitle': '古城墙历史悠久，登上城墙，感受到了历史的魅力，城墙很宽阔，俯瞰西安城很不错！'
              },
              {
                'albumCoverUrl290': '/static/images/list/list2.jpeg',
                'title': '西安小雁塔',
                'trackTitle': '环境清幽，经受了1200多年风雨的侵袭和70余次地震的考验，历史上曾经历过三次离合。'
              },
              {
                'albumCoverUrl290': '/static/images/list/list3.jpg',
                'title': '西安城墙',
                'trackTitle': '古城墙历史悠久，登上城墙，感受到了历史的魅力，城墙很宽阔，俯瞰西安城很不错！'
              },
              {
                'albumCoverUrl290': '/static/images/list/list1.jpg',
                'title': '西安钟楼',
                'trackTitle': '中国古代遗留的形制最大、保存最完整的一座钟楼，每天都有6场编钟表演。'
              }
            ]
          }
        }
      ]
    }
  },
  beforeMount () {
    this.currentList = this.listData[0].hotRecommends.list
  },

  components: {
  },

  methods: {
    // 跳转首页
    gotoIndexpage () {
      wx.switchTab({
        url: '/pages/index/main'
      })
    },
    // 跳转商品详情页面
    gotoDetails () {
      // var url = e.currentTarget.dataset.coverimg
      // var title = e.currentTarget.dataset.title
      wx.navigateTo({
        url: '/pages/detail/main'
      })
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style lang="scss">
page {
  background-color: #f5faf8;
  height: 100%;
}
.main {
  width: 100%;
  height: auto;
  .gotoIndex {
    position: fixed;
    top: 40rpx;
    right: 50rpx;
    background-color: #000;
    width: 100rpx;
    height: 40rpx;
    opacity: 0.1;
    z-index: 99;
    border-radius: 10rpx;
  }
  .backcon {
    position: fixed;
    top: 30rpx;
    right: 55rpx;
    z-index: 100;
    img {
      width: 30rpx;
      height: 30rpx;
      vertical-align: middle;
    }
    span {
      font-size: 26rpx;
      color: #fff;
      padding-left: 10rpx;
      vertical-align: middle;
    }
  }
  .top {
    width: 100%;
    height: 356rpx;
    background-color: #fff;
    p {
      text-align: center;
    }
    .topimg {
      width: 150rpx;
      height: 150rpx;
      margin: 0 auto;
      display: block;
    }
    .toptit {
      font-size: 37rpx;
      color: #333;
      padding: 20rpx 0;
    }
    .topfu {
      font-size: 26rpx;
      color: #666;
      padding-bottom: 20rpx;
    }
    .topno {
      width: 100%;
      display: flex;
      justify-content: center;
      span {
        font-size: 26rpx;
        color: #333;
        height: 26rpx;
        line-height: 26rpx;
      }
      .topno_l {
        width: 270rpx;
        text-align: right;
      }
      .topbor {
        color: #ddd;
      }
      .topno_r {
        width: 270rpx;
      }
    }
  }
  .content {
    background-color: #fff;
    width: 100%;
    height: auto;
    margin-top: 15rpx;
    .contitle {
      font-size: 35rpx;
      color: #333;
      padding: 30rpx 0 0 35rpx;
    }
    .content-item{
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 10rpx 20rpx;
    }

    .content-item image {
      width: 150rpx;
      height: 150rpx;
      margin-top: 10rpx;
      border-radius: 15rpx;
    }

    .content-left {
      padding: 10rpx 0rpx;
      width: 73%;
      height: auto;
      border-bottom: 1rpx solid #f1f1f1;
    }

    .content-title{
      font-size: 35rpx;
      color: #000;
      display: -webkit-box;
      -webkit-line-clamp: 2;/*行数n*/
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .content-text{
      display: -webkit-box;
      -webkit-line-clamp: 1;/*行数n*/
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 27rpx;
      text-align: left;
      color: #ccc;
      margin-top: 15rpx;
    }
    .count{
      font-size: 27rpx;
      color: #ccc;
      display: flex;
      justify-content: start;
      margin-top: 15rpx;
    }
  }
}

</style>
