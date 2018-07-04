// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [    
    '../../images/banner-01@2x.png',
    '../../images/banner-02@2x.png',
    '../../images/banner-03@2x.png'
    ],    
    // 热门课程数据
    hotLesson:[
      {
        color:"#4399f9",
        title:"创意DIY班",
        subtitle:"适合1-3岁宝宝"
      },
      {
        color:"#8c43f9",
        title:"速写班",
        subtitle:"适合3-6岁宝宝"
      },
      {
        color:"#f94388",
        title:"国画班",
        subtitle:"适合6-9岁宝宝"
      },
      {
        color:"#8333f9",
        title:"色彩班",
        subtitle:"适合9-16岁宝宝"
      },
      {
        color:"#f92088",
        title:"创意美术班",
        subtitle:"适合16-19岁宝宝"
      }
    ],    
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
  },
   changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

 
})