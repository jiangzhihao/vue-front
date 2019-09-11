<template>
  <section>
    <Search placeholder="请输入搜索关键词" v-model="value" @search="onSearch" @cancel="onCancel" show-action v-search-focus></Search>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';
import { Search } from 'vant';

@Component({
  components: {
    Search,
  },
  directives: {
    ['search-focus']: {
      inserted(el) {
        el.querySelector('input')!.focus();
      },
    },
  },
})
export default class HomeSearch extends Vue {
  private value: string;
  private data() {
    return {
      value: '',
    };
  }

  private onSearch(): void {
    // console.log(111);
  }

  private onCancel(): void {
    this.$router.push('/home');
  }
}
</script>

<style lang="scss" scoped>
</style>
