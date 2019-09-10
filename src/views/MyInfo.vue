<template>
  <section style="background-color: #F5F5F5">
    <NavBar title="个人中心"></NavBar>
    <div class="info">
      <div class="picture-card">
        <div class="circle"></div>
        <div class="name">李荣浩</div>
      </div>
      <div class="edit-button">编辑资料</div>
    </div>
    <Panel>
      <div slot="header">
        <div class="panel-title">
          <span class="title">我的订单</span>
          <span class="title-right">
            <span class="content">查看全部</span>
            <Icon name="arrow" class="icon"></Icon>
          </span>
        </div>
      </div>
      <div slot="default">
        <Grid>
          <GridItem v-for="value in 4" :key="value" icon="photo-o" text="文字" />
        </Grid>
      </div>
    </Panel>

    <div class="panel-title" style="margin-top: 1.3%; background-color: white">
      <span class="title">我的拼团订单</span>
      <span class="title-right">
        <Icon name="arrow" class="icon"></Icon>
      </span>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';
import { NavBar, Panel, Icon, Grid, GridItem } from 'vant';

@Component({
  components: {
    NavBar,
    Panel,
    Icon,
    Grid,
    GridItem,
  },
})
export default class MyInfo extends Vue {
  @Model()
  private searchValue: string;
}
</script>

<style lang="scss" scoped>
.info {
  height: 120px;
  display: flex;
  align-items: center;
  padding: 0 4%;
  justify-content: space-between;
  background-color: #f4f4f4;
  .picture-card {
    display: flex;
    align-items: center;
    .circle {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background-color: aquamarine;
    }
    .name {
      margin-left: 10px;
      line-height: 22px;
      color: #333333;
      font-family: PingFangSC-Medium;
      font-size: 16px;
    }
  }

  .edit-button {
    line-height: 24px;
    border: 1px solid #666666;
    border-radius: 2px;
    padding: 0 10px;
    cursor: pointer;
    font-size: 16px;
  }
}
.panel-title {
  display: flex;
  justify-content: space-between;
  padding: 2% 4%;

  .title-right {
    display: flex;
    align-items: center;
    .content {
      font-size: 12px;
      color: #999999;
    }
    .icon {
      color: #999999;
    }
  }
}
</style>
