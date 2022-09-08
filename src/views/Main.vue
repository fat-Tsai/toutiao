<template>
    <div>
      <router-view></router-view>
      <!-- 底部导航栏 -->
        <van-tabbar v-model="active" @change="onChange">
          <van-tabbar-item icon="home-o" to="/" name="home">主页</van-tabbar-item>
          <van-tabbar-item icon="user-o" to="/user" name="user">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Main',
  data() {
    return {
      active: 'home'
    }
  },
  methods: {
    onChange(index) {
      this.active = index
    }
  }
}
</script>

<style lang="less" scoped>

</style>
