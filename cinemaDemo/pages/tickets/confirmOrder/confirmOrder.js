// pages/tickets/confirmOrder/confirmOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj: {
      data: [
        { title1: "爆米花小份+2杯可乐", title2: "可乐500ml", title3: "已售490笔", price: "32", count: 0 },
        { title1: "爆米花小份+2杯雪碧", title2: "雪碧500ml", title3: "已售490笔", price: "32", count: 0 },
        { title1: "1份爆米花小份+1杯雪碧", title2: "雪碧500ml", title3: "已售490笔", price: "25", count: 0 },
        { title1: "2份爆米花大份+2杯可乐", title2: "可乐500ml", title3: "已售490笔", price: "50", count: 0 }
      ]
    }
  },
  switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  addItem: function (e) {
    let tempData = this.data.obj;
    tempData.data[e.target.id].count += 1;
    this.setData({
      obj: tempData
    })
  },
  decreaseItem: function (e) {
    let tempData = this.data.obj;
    let index = e.target.id.slice(0, 1) - 0;
    tempData.data[index].count >= 1 ? --tempData.data[index].count : 0;
    this.setData({
      obj: tempData
    })
  },
  payTheOrder:function(e){
    console.log("payTheOrder",e);
    let id = e.target.id;
    if(id){
        wx:wx.navigateTo({
          url: '../finishOrder/finishOrder',
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