// pages/recommend/watchTogether/watchTogether.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedBtn1: true,
    selectedBtn2: false,
    selectedBtn3: false,
  },
  handleSelected: function (e) {
    let evt = e.target.id;
    if (evt) {
      let index = evt.slice(3) - 0;
      let temp = {};
      for (let i = 1; i < 4; i++) {
          if(i === index){
            temp['selectedBtn' + i] = true;
          }else{
            temp['selectedBtn' + i] = false;
          }
      }
      this.setData( temp );
    }
  
  },
  enterChatSecret: function (e) {

    let url = e.currentTarget.id;
    if (url){
        wx.navigateTo({
          url: url,
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