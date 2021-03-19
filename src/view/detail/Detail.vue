<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick1"></detail-nav-bar>
    <scroll class="detailContent" ref="scroll" :probe-type="3">
      <detail-swiper :topImages="topImage"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
      <detail-param-info :param-info="paramInfo" ref="params"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommend" ref="recommend"></goods-list>
      <ul>
        <li v-for="(item,index) in $store.state.cartList" :key="index">{{item}}</li>
      </ul>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <toast :message="message" :show="show"></toast>
  </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar'
import DetailSwiper from './childComponents/DetailSwiper'
import DetailBaseInfo from './childComponents/DetailBaseInfo'
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from '../../network/detail'
import DetailShopInfo from './childComponents/DetailShopInfo'
import DetailGoodsInfo from './childComponents/DetailGoodsInfo'
import DetailParamInfo from './childComponents/DetailParamInfo'
import DetailCommentInfo from './childComponents/DetailCommentInfo'
import DetailBottomBar from './childComponents/DetailBottomBar'
import GoodsList from '../../components/content/goods/GoodsList'
import Scroll from '../../components/common/scroll/Scroll'
import Toast from '../../components/common/toast/Toast'
export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImage: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      message: '',
      show: false,
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    Scroll,
    Toast,
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
      //2.请求商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      )
      //3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)
      //4.保存商品的详情数据
      this.detailInfo = data.detailInfo
      //5.获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      )
      //6.获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
      //7.获取推荐信息
      getRecommend().then((res) => {
        this.recommend = res.data.list
      })
      this.$nextTick(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        console.log(this.themeTopYs)
      })
    })
  },
  mounted() {},
  methods: {
    titleClick1(index) {
      console.log(index)
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    },
    // contentScroll(position) {
    //   const positionY = -position.y
    //   let length = this.themeTopYs.length
    //   for (let i = 0; this.themeTopYs.length; i++) {
    //     if (
    //       (i < length - 1 &&
    //         positionY > this.themeTopYs[i] &&
    //         positionY < this.themeTopYs[i + 1]) ||
    //       (i === length - 1 && positionY > this.themeTopYs[i])
    //     ) {
    //       console.log(i)
    //     }
    //   }
    // },
    addToCart() {
      //1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImage[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      // product.count = 0
      this.$store.dispatch('addCart', product).then((res) => {
        this.show = true
        this.message = res

        setTimeout(() => {
          this.show = false
          this.message = ''
        }, 1500)
        // this.$toast.show(res, 2000)
      })
    },
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
    bottom: 58px;
    left: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
  }
</style>
