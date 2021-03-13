<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar'
export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
    }
  },
  components: {
    DetailNavBar,
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.id

    //2.根据iid请求详细数据
  },
}
</script>

<style scoped>

</style>
