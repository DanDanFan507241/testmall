<template>
  <div class="toast" v-show="show">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      // message: '',
      // isShow: false,
    }
  },
  props: {
    message: {
      type: String,
      default: '',
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  // methods: {
  //   show(message, druation) {
  //     this.isShow = true
  //     this.message = message
  //     setTimeout(() => {
  //       this.isShow = false
  //       this.message = ''
  //     }, druation)
  //   },
  // },
}
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    padding: 8px 10px;
  }
</style>
