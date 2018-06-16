// pages/tickets/selectCinema/selectCinema.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: [true, false, false, false]
  },
  selectSession:function(e){
    console.log("selectSession",e);
    let id = e.currentTarget.id;
    if (id){
      wx.navigateTo({
        url: '../selectSession/selectSession'
      })
    }
  },
  handleSelected: function (e) {
    console.log("e", e);
    let index = e.target.id - 0;
    let arr = this.data.selected
    let len = this.data.selected.length;
    for (let i = 0; i < len; i++) {
      if (i === index) {
        arr[i] = true;
      } else {
        arr[i] = false;
      }
    }
    this.setData({
      selected: arr,
    })
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