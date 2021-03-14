<template>
  <div class="BaseInfo" v-if="Object.keys(goods).length !==0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <div class="discount">{{goods.discount}}</div>
    </div>
    <div class="columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[2]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <span v-for="index in goods.services.length-1" :key="index" class="services-items">
        <img :src="goods.services[index-1].icon" alt />
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  data() {
    return {}
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
  .BaseInfo {
    margin: 5px 2px 2px 5px;
    
  }
  .info-title {
    color: #000;
    text-indent: 1em;
    font-size: 15px;
  }
  .info-price {position: relative;
    margin-top: 5px;
  }
  .n-price {
    color: var(--color-tint);
    font-size: 20px;
  }
  .o-price {
    margin-left: 5px;
    font-size: 14px;
    text-decoration: line-through;
  }
  .discount {
    position: absolute;
    display: inline-block;
    font-size: 14px;
    text-align: center;
    background-color: var(--color-tint);
    color: #fff;
    border: 1px solid var(--color-tint);
    border-radius: 10px;
    margin-left: 10px;
  }
  .columns {
    display: flex;
    font-size: 12px;
    padding: 15px 0px;
    border-bottom: 1px solid rgb(185, 185, 185);
  }
  .columns span{
    flex: 1;
  }
  .columns span:nth-child(2) {
    text-align: center;
  }
  .columns span:nth-child(3) {
    text-align: right;
  }
  .info-services {
    display: flex;
    font-size: 12px;
  }
  .services-items {
    flex: 1;
    padding: 20px 0px;
    border-bottom: 5px solid rgb(218, 218, 218);
  }
  .services-items:nth-child(2) {
    text-align: center;
  }
  .services-items:nth-child(3) {
    text-align: right;
  }
  .info-services img {
    display: inline-block;
    width: 12px;
    height: 12px;
  }
</style>
