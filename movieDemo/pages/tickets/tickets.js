Page({
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
      { title: "复仇者联盟3", grade: " 9.1", count: "234", label: ["剧情", "动作", "悬疑"], director: ["安东尼.罗素", "乔.罗素"], priceMin: '25', },
      { title: "复仇者联盟2", grade: " 8.9", count: "345", label: ["剧情", "动作", "悬疑"], director: ["安东尼.罗素", "乔.罗素"], priceMin: '25', },
      { title: "复仇者联盟1", grade: " 9.0", count: "456", label: ["剧情", "动作", "悬疑"], director: ["安东尼.罗素", "乔.罗素"], priceMin: '25', }
    ],
    dataComing:
    {
      tomorrow: [
        { title: "复仇者联盟3", peopleCount: "78900", label: ["剧情", "动作", "悬疑"], director: ["安东尼.罗素", "乔.罗素"], abc: '想看' },
        { title: "复仇者联盟2", peopleCount: "56700", label: ["剧情", "动作", "悬疑"], director: ["安东尼.罗素", "乔.罗素"], abc: '预售' },
      ],
      thirdDay: [
        { title: "复仇者联盟3", peopleCount: "78900", label: ["剧情", "动作", "悬疑"], director: ["安东尼.罗素", "乔.罗素"], abc: '想看' },
        { title: "复仇者联盟2", peopleCount: "45600", label: ["剧情", "动作", "悬疑"], director: ["安东尼.罗素", "乔.罗素"], abc: '预售' },
        { title: "复仇者联盟1", peopleCount: "12300", label: ["剧情", "动作", "悬疑"], director: ["安东尼.罗素", "乔.罗素"], abc: '预售' },
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
  presell: function(e){
    let index = e.target.id.slice(4) - 0;
    let date = e.target.id.slice(0 ,3);
    if (date === "tom"){
      // 明天票的预定，index是对应数据的下标
    } else if (date === "thi"){
      //后天票的预定，index是对应数据的下标
    }

  },
  buyTickets:function(e){
    console.log("buyTickets_e",e); 
    wx.navigateTo({
      url: './buyTickets/buyTickets'
    })
  }

})
