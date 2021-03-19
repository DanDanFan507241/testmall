export default {
  AddCounter(state, payload) {
    payload.count++
  },
  AddToCart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}