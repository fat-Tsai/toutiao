<template>
    <div>
        <van-cell>
            <!-- 标题区域的插槽 -->
            <template #title>
                <div class="title-box">
                    <!-- 文章标题 -->
                    <span>{{article.title}}</span>
                    <!-- 单张图片描述 -->
                    <img v-if="article.cover.type === 1" v-lazy="article.cover.images[0]" alt="" class="thumb">
                </div>
                <!-- 三张图片描述 -->
                <div class="thumb-box" v-if="article.cover.type === 3">
                    <img v-for="(item, index) in article.cover.images" :key="index" v-lazy="item" alt="" class="thumb">
                </div>
            </template>
            <!-- label区域的插槽 -->
            <template #label>
                <div class="label-box">
                    <span class="modify"> 作者 &nbsp;{{article.aut_name}} &nbsp;&nbsp; {{article.comm_count}}评论 &nbsp;&nbsp; {{article.pubdate | dateFormat}}</span>
                    <!-- 关闭按钮 -->
                    <van-icon name="cross"></van-icon>
                </div>
            </template>
        </van-cell>
    </div>
</template>

<script>
export default {
  name: 'ArtItem',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
// 作者评论发布日期
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
// 文章下方的图片
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}
// 文章标题
.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
// 三张图片
.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
