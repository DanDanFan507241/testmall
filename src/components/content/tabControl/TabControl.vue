<template>
  <div class="tabcontrol">
    <div
      v-for="(item,index) in title"
      :key="index"
      class="tabcontrol-item"
      :class="{active: index === currentIndex}"
      @click="tabClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
  .tabcontrol {
    display: flex;
    font-style: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tabcontrol-item {
    flex: 1;
    text-align: center;
  }
  .tabcontrol-item span {
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
   
  }
  .active span {
    border-bottom: 3px solid var(--color-high-text);
  }
</style>
