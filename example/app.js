//为页面创建一个应用实例对象
App({
  //生命周期函数，监听页面加载,只会执行一次，在整个停用启动时触发
  onLoad: function () {
    // const app = getApp();
    console.log('应用启动了')
  },
  //应用显示在屏幕上了
  onShow: function (options) {
    console.log('应用前台显示了')
    console.log(options)
  },
  onHide:function(){
    console.log('隐藏到后台')
  },
  //只能捕获到运行阶段的异常
  onError:function(msg){
    console.log(123)
  },
  //除了生命周期里面定义的钩子函数，还可以定义任何成员。定义在这里的成员可以在后续的每一个页面共享
  foo:"bar",
  show(){
    console.log('hello')
  }
})