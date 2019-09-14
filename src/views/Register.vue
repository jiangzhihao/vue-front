<template>
  <section class="container">
    <CellGroup>
      <Field v-model="username" left-icon="contact" clearable placeholder="请输入用户名" />

      <Field v-model="password" left-icon="/img/icons/android-chrome-192x192.png" type="password" placeholder="请输入密码" />
    </CellGroup>
    <div class="regist">
      <span>
        注册
        <Icon name="arrow"></Icon>
      </span>
      <span>
        使用快速登录
        <Icon name="arrow"></Icon>
      </span>
    </div>
    <Button class="login-btn">登录</Button>
    <div class="oauto-regist">
      <span>第三方登陆</span>
      <div class="img-group">
        <img src="@/assets/wechat@2x.png" alt />
        <img src="@/assets/QQ@2x.png" alt />
        <img src="@/assets/QQ@2x.png" alt />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';
import { Field, CellGroup, Icon, Button } from 'vant';

@Component({
  components: {
    Field,
    CellGroup,
    Icon,
    Button,
  },
})
export default class Register extends Vue {
  @Model()
  private username: string;

  @Model()
  private password: string;
}
</script>

<style lang="scss" scoped>
.container {
  padding: 10% 6%;
}
.regist {
  margin: 10% 6%;
  font-size: 13px;
  color: #ff3d00;
  display: flex;
  justify-content: space-between;
  span {
    display: flex;
    align-items: center;
  }
}
.login-btn {
  width: 100%;
  background: #ff3d00;
  border-radius: 4px;
  color: white;
}
.oauto-regist {
  position: absolute;
  bottom: 55px;
  text-align: center;
  width: calc(100% - 6% * 2);
  .img-group {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    img {
      width: 48px;
      height: 48px;
    }
  }
}
</style>
