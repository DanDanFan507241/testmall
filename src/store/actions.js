export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item =>
        payload.iid === item.iid
      )
      if (oldProduct) {
        context.commit('AddCounter', oldProduct)
        resolve("当前商品数量+1")
      }
      else {
        payload.count = 1
        context.commit('AddToCart', payload)
        resolve("添加新的商品")
      }
    })
  }
}