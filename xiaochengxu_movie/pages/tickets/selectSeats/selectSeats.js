// pages/tickets/selectedSeats/selectSeats.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scaleFactor: 1,
    seatColor: [
      [{ color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" },],
      [{ color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" },],
      [{ color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" },],
      [{ color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" },],
      [{ color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" },],
      [{ color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" },],
      [{ color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" },],
      [{ color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" },],
      [{ color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" },],
      [{ color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" },],
      [{ color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" },],
      [{ color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" },],
      [{ color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" },],
      [{ color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" },],
      [{ color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" }, { color: "#fff" },],],
    seatInfo: {},
  },
  changeColor: function (e) {
    console.log("changeColor_e", e);
    let arr = e.target.id.split("_");
    console.log("arr", arr);
    

    let tempInfo = this.data.seatInfo;
    let index = Object.keys(tempInfo).indexOf(e.target.id);
    let length = Object.keys(tempInfo).length;

    if ((index < 0) && (length < 4)) {
      let tempData = this.data.seatColor;
      tempData[arr[0] - 0][arr[1] - 0].color == "#fff" ? tempData[arr[0] - 0][arr[1] - 0].color = "#fa4" : tempData[arr[0] - 0][arr[1] - 0].color = "#fff"
      tempInfo[e.target.id] = { location: `${arr[0] - 0 + 1}排${arr[1] - 0 + 1}座`, price: "32元" };
      this.setData({
        seatColor: tempData,
        seatInfo: tempInfo
      })
    }
    else if((index >= 0)){
      let tempData = this.data.seatColor;
      tempData[arr[0] - 0][arr[1] - 0].color == "#fff" ? tempData[arr[0] - 0][arr[1] - 0].color = "#fa4" : tempData[arr[0] - 0][arr[1] - 0].color = "#fff"
      delete tempInfo[e.target.id];
      this.setData({
        seatColor: tempData,
        seatInfo: tempInfo
      })
    } else {
        wx.showToast({
          title: '一次最多选4张',
          icon: 'loading',
          duration: 1500
        })
        setTimeout(function(){
          wx.hideToast();
        },1500)
    }
    console.log("length", length);
    console.log("index", index);
    console.log(" Object.keys(this.data.seatInfo)", Object.values(this.data.seatInfo));
    console.log("this.data.seatInfo", this.data.seatInfo);
    console.log(" tempInfo.a", tempInfo);

    // console.log("tempData", tempData[arr[0] - 0][arr[1] - 0].color);
  },
  buyTicket: function(e){

  },
  pressView:function(e){
    console.log("e_pressView",e);
    let currId = e.currentTarget.id;
    console.log("currId",currId);
    this.setData({
      scaleFactor: 1.5,
    })
    // e.currentTarget.style.transform = 'scale(1.5)';
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