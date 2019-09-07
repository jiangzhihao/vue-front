<template>
  <div class="home">
    <NavBar title="时装服饰"></NavBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { NavBar } from 'vant';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    NavBar,
  },
})
export default class Home extends Vue {
}
</script>
