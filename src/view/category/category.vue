<template>
  <div class="wrapper">
    <ul class="content">
      <button>按钮</button>
      <li>测试1</li>
      <li>测试2</li>
      <li>测试3</li>
      <li>测试4</li>
      <li>测试5</li>
      <li>测试6</li>
      <li>测试7</li>
      <li>测试8</li>
      <li>测试9</li>
      <li>测试10</li>
      <li>测试1</li>
      <li>测试2</li>
      <li>测试3</li>
      <li>测试4</li>
      <li>测试5</li>
      <li>测试6</li>
      <li>测试7</li>
      <li>测试8</li>
      <li>测试9</li>
      <li>测试10</li>
      <li>测试1</li>
      <li>测试2</li>
      <li>测试3</li>
      <li>测试4</li>
      <li>测试5</li>
      <li>测试6</li>
      <li>测试7</li>
      <li>测试8</li>
      <li>测试9</li>
      <li>测试10</li>
      <li>测试1</li>
      <li>测试2</li>
      <li>测试3</li>
      <li>测试4</li>
      <li>测试5</li>
      <li>测试6</li>
      <li>测试7</li>
      <li>测试8</li>
      <li>测试9</li>
      <li>测试10</li>
      <li>测试1</li>
      <li>测试2</li>
      <li>测试3</li>
      <li>测试4</li>
      <li>测试5</li>
      <li>测试6</li>
      <li>测试7</li>
      <li>测试8</li>
      <li>测试9</li>
      <li>测试10</li>
      <li>测试1</li>
      <li>测试2</li>
      <li>测试3</li>
      <li>测试4</li>
      <li>测试5</li>
      <li>测试6</li>
      <li>测试7</li>
      <li>测试8</li>
      <li>测试9</li>
      <li>测试10</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Category',
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    this.scroll = new BScroll(document.querySelector('.wrapper'), {
      probeType: 3,
      pullUpLoad: true,
    })
    this.scroll.on('scroll', (postion) => {
      console.log(postion)
    })
    this.scroll.on('pullingUP', () => {
      console.log('上拉加载更多')
    })
  },
}
</script>

<style scoped>
  .wrapper {
    height: 150px;
    background-color: red;
    overflow-y: scroll;
  }
</style>
