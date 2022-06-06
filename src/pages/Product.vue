<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="product__wrapper">
          <!--  slider  -->
          <div class="product-slider">
<!--            <img :src="product.img" :alt="product.title">-->
            <carousel
                :perPage="1"
                :pagination-enabled="true"
                pagination-color="#b3b3b3"
                pagination-active-color="#494ce8"
            >
              <slide v-for="(gallery,index) in product.gallery" :key="index">
                <img :src="gallery.img" :alt="gallery.name">
              </slide>
            </carousel>
          </div>
          <!--  content  -->
          <div class="product-content">
            <h1 class="title">Product: {{ product.title }}</h1>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      product: null,
    }
  },

  created() {
    let id = +this.$route.params.id;
    this.product = this.$store.getters.getProduct(id);
  }
}
</script>

<style lang="scss">
.product__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-slider,
.product-content{
  width: 48%;
  text-align: center;

}
.VueCarousel-inner{
  visibility: visible !important;
  flex-basis: 100% !important;
  width: 100% !important;
}
</style>