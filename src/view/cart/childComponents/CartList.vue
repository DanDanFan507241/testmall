<template>
  <div class="cart-list">
    <scroll class="cart-content" ref="cartListRefresh">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :item-info="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll'
import CartListItem from './CartListItem'
import { mapGetters } from 'vuex'

export default {
  name: 'CartList',
  data() {
    return {}
  },
  components: {
    Scroll,
    CartListItem,
  },
  computed: {
    ...mapGetters(['cartList']),
  },
  activated() {
    this.$refs.cartListRefresh.refresh()
  },
}
</script>

<style scoped>
  .cart-list {
    height: 100vh;
  }
  .cart-content {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>
