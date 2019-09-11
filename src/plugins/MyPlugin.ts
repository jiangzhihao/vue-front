export default {
  install(Vue: any, options: any) {
    Vue.directive('focus', {
      // 当被绑定的元素插入到 DOM 中时……
      inserted(el: any) {
        // 聚焦元素
        el.focus();
      },
    });

    // 4. 添加实例方法
    // Vue.prototype.$myMethod = function (methodOptions) {
    //   // 逻辑...
    // }
  },
};
