Page({
  data:{
    isLoading:true
  },
  onReady(){
    // 箭头函数不会改变this的指向，指向外部
    setTimeout(()=>{
      this.setData({isLoading:false})
    },2000)
  }
})