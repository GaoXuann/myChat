//创建一个页面实例
Page({
  data:{},
  //这个页面即将要工作了
  //适合做数据的初始化
  onLoad(){
    this.setData({foo:'hello world'})
    console.log('页面开始加载了')
  },
  onShow(){
    //页面进入焦点化（前台展示）
    console.log('页面进入焦点，前台展示了')
  },
  //当页面数据渲染完成,之后才起作用
  onReady(){
    wx.setNavigationBarTitle({
      title: 'index',
    })
    console.log('页面渲染完成')
  },
  //当前页面隐藏
  onHide(){
    console.log('页面进入后台')
  },
  onUnload(){
    console.log('页面销毁')
  }
})