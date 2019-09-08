<template>
  <div>
    <router-view />
    <Tabbar>
      <TabbarItem icon="home-o">首页</TabbarItem>
      <TabbarItem icon="search">分类</TabbarItem>
      <TabbarItem icon="cart-o">购物车</TabbarItem>
      <TabbarItem icon="coupon-o">会员中心</TabbarItem>
      <TabbarItem icon="friends-o" to="/my-info">我的</TabbarItem>
    </Tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';
import { Tabbar, TabbarItem } from 'vant';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    Tabbar,
    TabbarItem,
  },
})
export default class CommonLayout extends Vue {

}
</script>

<style lang="scss" scoped>
.swipe-item {
  background-color: #66c6f2;
  height: 100%;
}
</style>
