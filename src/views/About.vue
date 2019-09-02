<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button type="default">默认按钮</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button } from 'vant';

@Component({
  components: {
    Button,
  },
})
export default class About extends Vue { }
</script>

<style lang="scss" scoped>
</style>
