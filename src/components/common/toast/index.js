import Toast from './Toast'
const obj = {}
obj.install = function (Vue) {
  console.log("执行了Obj的Install函数")
  Vue.component('obj', Toast)
  //1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  //2.通过new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastContrustor()
  //3.将我们的组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //4.toast.$el对应的就是div
  console.log(toast.$el)
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = Toast
}
export default obj