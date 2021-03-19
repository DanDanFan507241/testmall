<template>
  <div class="cart">
    <!-- 导航 开始 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 导航结束 -->
    <!-- 商品列表 开始 -->
    <cart-list></cart-list>
    <!-- 商品列表 结束 -->
    <!-- 底部结算导航栏 开始 -->
    <cart-bottom-bar></cart-bottom-bar>
    <!-- 底部结算导航栏 结束 -->
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import CartList from './childComponents/CartList'
import CartBottomBar from './childComponents/CartBottomBar'

import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  data() {
    return {}
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    //两种语法 1.
    ...mapGetters(['cartLength', 'cartList']),
    // //...mapGetters({
    //   length:'cartLength',
    //     list:'cartList'
    // })
  },
}
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .cart {
    height: 100vh;
  }
</style>
