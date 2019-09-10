<template>
  <section>
    <NavBar title="时装服饰"></NavBar>
    <Search placeholder="搜索商品" v-model="searchValue"></Search>
    <Swipe :autoplay="3000" indicator-color="white" style="height: 350px">
      <SwipeItem>
        <div class="swipe-item">1</div>
      </SwipeItem>
      <SwipeItem>
        <div class="swipe-item">2</div>
      </SwipeItem>
      <SwipeItem>
        <div class="swipe-item">3</div>
      </SwipeItem>
      <SwipeItem>
        <div class="swipe-item">4</div>
      </SwipeItem>
    </Swipe>
    <Grid :gutter="10" :column-num="5" square style="height: 102px; align-items: center">
      <GridItem v-for="value in 5" :key="value" icon="photo-o" text="文字" />
    </Grid>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';
import { NavBar, Search, Swipe, SwipeItem, Grid, GridItem } from 'vant';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    NavBar,
    Search,
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
  },
})
export default class Home extends Vue {
  @Model()
  private searchValue: string;
}
</script>

<style lang="scss" scoped>
.swipe-item {
  background-color: #66c6f2;
  height: 100%;
}
</style>
