<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button type="default">默认按钮</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Button, Divider } from 'vant';

@Component({
  components: {
    Button,
  },
})
export default class About extends Vue {
  @Prop()
  public NavBar: string;
}
</script>

<style lang="scss" scoped>
</style>
