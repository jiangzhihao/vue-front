<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
  <!-- <NavBar title="标题" left-text="返回" right-text="按钮" left-arrow></NavBar> -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { NavBar } from 'vant';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    NavBar,
    HelloWorld,
  },
})
export default class Home extends Vue { }
</script>
