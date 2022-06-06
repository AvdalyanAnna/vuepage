<template>
  <div id="scroll-area">
    <smooth-scrollbar>
      <div class="wrappeer">
        <!--    <header></header>-->
        <header class="navbar">
          <div class="container">
            <div class="navbar-content">
              <div class="logo">
                <router-link to="/">VUE-CLI</router-link>
              </div>
              <ul class="navbar-list">
                <li class="navbar-item" v-for="link in links" :key="link.title">
                  <router-link :to="link.url" class="navbar-link" :title="link.title">{{ link.title }}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <router-view/>
        <!--  <footer></footer>-->
      </div>
    </smooth-scrollbar>
  </div>
</template>

<script>
import SmoothScrollbar from "@/components/SmoothScrollbar";
export default {
  name: 'App',
  components: {
    SmoothScrollbar
  },
  data() {
    return {
      links: [
        {
          title: "Home",
          url: "/"
        },
        {
          title: "Shop",
          url: "/shop"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color: #5247e7;
  }
}

#scroll-area {
  width: auto;
  height: 100vh;
  overflow: auto;
  margin: 0;

}


</style>
