// pages/tickets/selectSession/selectSession.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: [true, false, false, false],
    filmList: ['超时空同居', '复仇者联盟3', '猛虫过江', '厕所英雄', '泄密者'],
    scrollArr: [false, false, true, false, false],
  },
  //导航到开卡页面
  navgatorToNew: function (e) {
    let url = e.currentTarget.id;
    console.log("导航到开卡页面",e);
    if (url) {
      wx.navigateTo({
        url: url,
      })
    }
  },
  selectSeat:function(e){
    console.log("selectSeat",e);
    let id = e.currentTarget.id;
    if (id){
      wx.navigateTo({
        url: '../selectSeat/selectSeat',
      })
    }
  },
  changeScrollImage: function (e) {
    console.log("changeScrollImage", e);
    console.log("changeScrollImage_type", e.type);
    let tempType = e.type;
    let startX = this.startX;
    let endX;
    if (tempType === 'touchstart') {
      this.startX = e.changedTouches[0].pageX - 0;
    } else if (tempType === 'touchend') {
      endX = this.endX || e.changedTouches[0].pageX - 0;
    }
    // if (startX) {
    //   if ((startX - endX) < -50) {
    //     console.log("startX", startX)
    //     //左边加载数据
    //     this.filmListUnshift();
    //   } else if ((startX - endX) > 50) {
    //     console.log("endX", endX)
    //     //右边加载数据
    //     this.filmListPop();
    //   }
    // }


  },
  filmListUnshift: function () {
    let arr = this.data.filmList;
    let len = arr.length;
    let item = arr[len - 1];
    arr.pop();
    arr.unshift(item);
    console.log("arr", arr);
    this.setData({
      filmList: arr,
    });
  },
  filmListPop: function () {
    let arr = this.data.filmList;
    let len = arr.length;
    let item = arr[0];
    arr.shift();
    arr.push(item);
    console.log("arr", arr);
    this.setData({
      filmList: arr,
    });
  },

  handleImage: function (e) {
    let tempType = e.type;
    let len = this.data.scrollArr.length;
    if (tempType === 'tap') {
      //点击事件
      let id = e.target.id - 0;
      if (id === 0 || id) {
        let arr = this.data.scrollArr;
        for (let i = 0; i < len; i++) {
          if (id === i) {
            arr[i] = true;
            console.log("i", i)
          } else {
            arr[i] = false;
          }
        }
        //点击了目标事件
        this.setData({
          scrollArr: arr,
        })
      }

    } else if (tempType === 'touchend') {
      //移动事件
    }

    console.log("tempType", e.type, "Image_e", e);
  },

  handleSelected: function (e) {
    console.log("handleSelected_e", e);
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