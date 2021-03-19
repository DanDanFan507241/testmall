<template>
  <div class="bottom-bar">
    <div class="checked-area">
      <check-button class="checked-button" :isChecked="isSelectAll" @click.native="selectAll"></check-button>
      <span>全选</span>
    </div>
    <div class="total-price">合计:{{totalPrice}}</div>
    <div class="calculate" @click="calcClick">去计算:{{checkLength}}</div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkButton/CheckButton'
export default {
  name: 'CartBottomBar',
  data() {
    return {}
  },
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0)
    },
    checkLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length
    },
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) return false
      return !this.$store.state.cartList.filter((item) => !item.checked).length
    },
  },
  methods: {
    selectAll() {
      console.log('点击成功')
      if (this.isSelectAll) {
        for (let item of this.$store.state.cartList) {
          item.checked = false
        }
      } else {
        for (let item of this.$store.state.cartList) {
          item.checked = true
        }
      }
    },
    calcClick() {
      if (!this.isSelectAll) {
        console.log('1')
      }
    },
  },
}
</script>

<style scoped>
  .bottom-bar {
    display: flex;
    height: 40px;
    background-color: #eee;
    position: relative;
    bottom: 133px;
    z-index: 999;
  }
  .checked-area {
    display: flex;
    align-items: center;
  }
  .checked-area span {
    margin-top: 10px;
    
  }
  .checked-button {
    width: 20px;
    height: 20px;
    margin-top: 10px;
    margin-left: 5px;
  }
  .total-price {
    flex: 1;
    text-align: center;
    margin-top: 15px;
  }
  .calculate {
    width: 100px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    background-color: red;
  }
</style>
