import data from "@/data/data";
export default {
    state: {
        shopList: data(),
    },
    mutations: {},
    actions: {},
    getters: {
        getShopList : state => state.shopList,
        getProduct : (state) => (id)  => state.shopList.find(product => product.id === id),
    },
}