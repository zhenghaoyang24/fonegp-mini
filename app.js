// app.js
App({
  onLaunch() {
    wx.redirectTo({
      url: "/index/index"
    })
  },
  globalData: {
    userInfo: null
  }
})
