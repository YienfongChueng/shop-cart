import Axios from 'axios'

export const CartApi = {
  getCartData () {
    return Axios.get('/api/cart.json')
      .then(res => res.data)
  }
}

export const AddressApi = {
  getAddressData () {
    return Axios.get('/api/address.json')
      .then(res => res.data)
  }
}
