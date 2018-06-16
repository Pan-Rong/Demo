// pages/tickets/tickets.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    selected: true,
    selected1: false,
    dataPopular: [
      { title: "复仇者联盟3：无限战争", grade: " 9.1", count: "234", label: ["剧情", "动作", "悬疑"], director: ["安东尼.罗素", "乔.罗素"], actors: ['小罗伯特.唐尼', '克里斯'], priceMin: '25', icon: '3D', flg: '购票' },
      { title: "超时空同居", grade: " 8.9", count: "345", label: ["剧情", "动作", "悬疑"], director: ["苏伦"], actors: ['雷佳音', '佟丽娅', '陶虹', '徐峥'], priceMin: '25', icon: '', flg: '购票' },
      { title: "猛虫过江", grade: " 9.0", count: "456", label: ["剧情", "动作", "悬疑"], director: ["小沈阳"], actors: ['小沈阳', '潘斌龙', '宋芸桦'], priceMin: '25', icon: '', flg: '预售', beOn: '本周五', wonder: '36636' },
      { title: "深海越狱", grade: " 6.4", count: "456", label: ["剧情", "动作", "悬疑"], director: ["帕夏.帕特里基"], actors: ['尚格.云顿', '杜夫.龙格尔'], priceMin: '25', icon: '', flg: '购票', beOn: '', wonder: '' }
    ],
    dataComing:
    {
      tomorrow: [
        { title: "复仇者联盟3：无限战争", peopleCount: "78900", label: ["剧情", "动作", "悬疑"], actors: ['小罗伯特.唐尼', '克里斯'], director: ["安东尼.罗素", "乔.罗素"], icon: '3D', flg: '预售', beOn: '周五上映', wonder: '36636' },
        { title: "复仇者联盟2", peopleCount: "56700", label: ["剧情", "动作", "悬疑"], director: ["安东尼.罗素", "乔.罗素"], actors: ['小罗伯特.唐尼', '克里斯'], icon: '3D', flg: '想看', beOn: '周五上映', wonder: '36636' },
      ],
      otherDay: [
        { title: "深海越狱", peopleCount: "45600", label: ["剧情", "动作", "悬疑"], director: ["安东尼.罗素", "乔.罗素"], actors: ['尚格.云顿', '杜夫.龙格尔'],  flg: '预售', beOn: '本周五', wonder: '36636' , icon: '' },
        { title: "猛虫过江", peopleCount: "12300", label: ["剧情", "动作", "悬疑"], director: ["小沈阳"], actors: ['小沈阳', '潘斌龙', '宋芸桦'], priceMin: '25', icon: '', flg: '预售', beOn: '本周五', wonder: '36636' },
        { title: "复仇者联盟", peopleCount: "78900", label: ["剧情", "动作", "悬疑"], director: ["安东尼.罗素", "乔.罗素"], actors: ['小罗伯特.唐尼', '克里斯'], icon: '3D', flg: '想看', beOn: '周五上映', wonder: '36636' },
      ]
    }
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true
    });
    wx.hideTabBarRedDot({
      index: 2,
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    });
    wx.showTabBarRedDot({
      index: 2,
    })
  },
  navToSearch: function () {
    wx.navigateTo({
      url: '../searchResult/searchResult'
    })
  },

  buyTickets: function (e) {
    let index = e.target.id.slice(7) - 0;
    let date = e.target.id.slice(0, 6);
    if (date === "presel") {
      // 预售票的处理，index是对应数据的下标，可为innerid
    } else if (date === "wonder") {
      //想看票的处理，index是对应数据的下标，可为innerid
    } else if ( date === "buynow" ){
      //购票处理
      console.log("buyTickets_e", e);
      wx.navigateTo({
        url: './buyTickets/buyTickets'
      })
    }
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})