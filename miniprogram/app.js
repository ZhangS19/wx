//app.js
App({
  tabbar: {
    backgroundColor: "#ffffff",
    selectedColor: "#000000",
    color: "#cecece",

  },
  onLaunch: function () {

    // 展示本地存储能力

    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  getFocus(e) {
    this.setData({
      searchFlag: true
    });
  },
  getInputText(e) {
    let v = e.detail;
    console.log(v);
    this.setData({
      searchText: v.detail.value
    });
  },
  cancelSearch(e) {
    this.setData({
      searchText: ""
    });
  },
  editTabbar: function () {
    let tabbar = this.globalData.tabBar;
    let currentPages = getCurrentPages();
    let _this = currentPages[currentPages.length - 1];
    let pagePath = _this.route;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (let i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },
  startSearch(e) {
    console.log(e.detail.value)
  },
  globalData: {
    userInfo: null,
    searchBar: {
      "icoPath": "/source/home.png",
      "placeHolder": "banananan"
    },
    tabBar: {
      "backgroundColor": "#ffffff",
      "color": "#b9b9b9",
      "selectedColor": "#111111",
      "list": [
        {
          "pagePath": "/pages/index/index",
          "iconPath": "/source/home.png",
          "selectedIconPath": "/source/home@selected.png",
          "text": "首页"
        },
        {
          "pagePath": "/pages/info/info",
          "iconPath": "/source/info.png",
          "selectedIconPath": "/source/info@selected.png",
          "text": "资讯"
        },
        {
          "pagePath": "/pages/shop/shop",
          "iconPath": "/source/shop.png",
          "selectedIconPath": "/source/shop@selected.png",
          "text": "商城"
        },
        {
          "pagePath": "/pages/me/me",
          "iconPath": "/source/me.png",
          "selectedIconPath": "/source/me@selected.png",
          "text": "我的"
        },
        
      ]
    }
  }
})
