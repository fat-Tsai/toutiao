<template>
    <div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有啦..." @load="onLoad" :immediate-check="false">
                <art-item v-for="item in artlist" :key="item.art_id" :article="item"></art-item>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
import { getArtListAPI } from '@/api/homeAPI'
import ArtItem from './ArtItem.vue'
export default {
  name: 'ArtList',
  props: {
    channelId: {
      type: Number,
      required: true
    }
  },
  components: {
    ArtItem
  },
  data() {
    return {
      artlist: [],
      timestamp: Date.now(),
      loading: false,
      finished: false,
      isLoading: false
    }
  },
  created() {
    this.initArtList()
  },
  methods: {
    async initArtList(isRefresh) {
      const { data: res } = await getArtListAPI(this.channelId, this.timestamp)
      if (res.message === 'OK') {
        this.timestamp = res.data.pre_timestamp
        if (isRefresh) {
          this.artlist = [...res.data.results, ...this.artlist]
          this.isLoading = false
        } else {
          this.artlist = [...this.artlist, ...res.data.results]
          this.loading = false
        }
        if (res.data.pre_timestamp === null) {
          this.finished = true
        }
      }
    },
    onLoad() {
      console.log('触发了上拉加载更多')
      this.initArtList()
    },
    onRefresh() {
      console.log('触发了下拉刷新')
      this.initArtList(true)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
