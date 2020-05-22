<template>
  <div class="list">
    <!-- <scroll-view scroll-y> -->
      <div class="content-item" @tap="gotoDetails"  v-for="(item,index) in currentList" :key="index">
        <image :src="item.albumCoverUrl290" />
        <div class="content-left">
          <div class="content-title">{{item.title}}</div>
          <div class="content-text">{{item.trackTitle}}</div>
          <div class="count">
            <div style="margin-right:25rpx;">
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
    <!-- </scroll-view> -->
  </div>
</template>

<script>

export default {
  data () {
    return {
      currentList: [
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
        }
      ]
    }
  },
  beforeMount () {
  },
  methods: {
    // 跳转商品详情页面
    gotoDetails () {
      wx.navigateTo({
        url: '/pages/detail/main'
      })
    }
  }
}
</script>
<style lang="scss">
  page {
    // background-color: #0f0;
    height: 100%;
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
</style>
