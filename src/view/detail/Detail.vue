<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="detailContent">
      <detail-swiper :topImages="topImage"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar'
import DetailSwiper from './childComponents/DetailSwiper'
import DetailBaseInfo from './childComponents/DetailBaseInfo'
import { getDetail, Goods, Shop } from '../../network/detail'
import DetailShopInfo from './childComponents/DetailShopInfo'
import Scroll from '../../components/common/scroll/Scroll'
export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImage: [],
      goods: {},
      shop: {},
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid

    //2.根据iid请求详细数据
    getDetail(this.iid).then((res) => {
      //1.获取顶部的图片轮播数据
      console.log(res)
      const data = res.result
      this.topImage = res.result.itemInfo.topImages
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      )
      this.shop = new Shop(data.shopInfo)
    })
  },
}
</script>

<style scoped>
  #detail {
    position: relative;
    height: 100vh;
    z-index: 9;
    background-color: #fff;
  }
  .detailContent {
    /* height: calc(100% - 44px); */
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
  }
</style>
