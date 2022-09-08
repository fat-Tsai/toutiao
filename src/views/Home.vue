<template>
    <div class="home-container">
      <!-- 头部区域 -->
        <van-nav-bar fixed>
          <!-- 左侧 logo插槽 -->
          <template #left>
            <img src="../assets/toutiao_logo.png" alt="logo" class="logo">
          </template>
          <!-- 右侧 搜索插槽 -->
          <template #right>
            <van-icon name="search" color="white" size="18" />
          </template>
        </van-nav-bar>
        <!-- 头部下方 文章分类的导航栏 -->
        <van-tabs :active="active" sticky offset-top="1.22666667rem" swipeable>
          <van-tab v-for="item in userChannel" :key="item.id" :title="item.name">{{item.name}}</van-tab>
        </van-tabs>
        <!-- 频道管理图标 -->
        <van-icon name="plus" size="12" class="plus" />
    </div>
</template>

<script>
import { getUserChannelAPI } from '@/api/homeApi'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  data() {
    return {
      active: 0,
      userChannel: []
    }
  },
  methods: {
    onClickTab(name, title) {
      console.log('name:', name)
      console.log('title:', title)
    },
    // 获取用户频道列表
    async initUserChannel() {
    // 1. 调用 API 接口
      const { data: res } = await getUserChannelAPI()
      // 2. 判断请求是否成功
      if (res.message === 'OK') {
      // 3. 为用户的频道列表赋值
        this.userChannel = res.data.channels
      }
    }
  },
  created() {
    this.initUserChannel()
  }
}
</script>

<style lang="less" scoped>
// 组件外层容器的样式
.home-container {
  padding-top: 46px;
  padding-bottom: 50px;
  // 穿透效果
  /deep/ .van-nav-bar {
    background-color: #007bff;
  }
  /deep/ .van-tabs__line {
    background-color: #007bff;
  }
}
// 标签页的右侧小图标预留位置
/deep/ .van-tabs__wrap {
  padding-right: 36px;
  background-color: white;
  // background-color: #000;
}
// 频道管理图标样式
.plus {
  position: fixed;
  top: 58px;
  right: 10px;
  z-index: 999;
}
// logo 样式
.logo {
  height: 80%;
}
</style>
