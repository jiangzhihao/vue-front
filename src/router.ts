import Vue from 'vue';
import Router from 'vue-router';
import CommonLayout from './views/CommonLayout.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: CommonLayout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: () =>
            import(/* webpackChunkName: "Home" */ './views/Home.vue'),
        },
        {
          path: 'my-info',
          component: () =>
            import(/* webpackChunkName: "MyInfo" */ './views/MyInfo.vue'),
        },
      ],
    },
    {
      path: '/home-search',
      component: () =>
        import(/* webpackChunkName: "HomeSearch" */ './views/HomeSearch.vue'),
    },
    {
      path: '/register',
      component: () =>
        import(/* webpackChunkName: "Register" */ './views/Register.vue'),
    },
  ],
});
