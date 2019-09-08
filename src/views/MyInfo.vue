<template>
 
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';
import { NavBar, Search, Swipe, SwipeItem, Tabbar, TabbarItem, Grid, GridItem } from 'vant';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
  },
})
export default class MyInfo extends Vue {
  @Model()
  private searchValue: string;
}
</script>

<style lang="scss" scoped>

</style>
