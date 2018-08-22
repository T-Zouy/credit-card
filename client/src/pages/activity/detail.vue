<template>
  <div class="activity-detail">
    <img v-for="(img, index) in imgList" :key="index" :src="img" alt="">
  </div>
</template>

<script>
const activityImgList = ['https://qnm.hunliji.com/o_1cldirf6qua13fopo1uis1o4hb.jpg',
  'https://qnm.hunliji.com/o_1cldirf6q1nhoqm23rfr0s16coc.jpg',
  'https://qnm.hunliji.com/o_1cldirf6qe6u163lnn9ej41gfdd.jpg',
  'https://qnm.hunliji.com/o_1cldirf6q1ams1c97ajt1eai1vg9e.jpg',
  'https://qnm.hunliji.com/o_1cldirf6q17qu15r1crus42emdf.jpg']
export default {
  name: 'detail',
  data () {
    return {
      imgList: activityImgList
    }
  }
}
</script>

<style lang="less" scoped>
  .activity-detail {
    width: 100%;
    font-size: 0;
    img {
      width: 100%;
    }
  }
</style>
