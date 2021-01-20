//index.js
//获取应用实例
const app = getApp()
function changeInfo(e, that){
  var index = Number(that.data.index);
  switch (index) {
    case 0:
      var b = Number(that.data.b);
      var h = Number(that.data.h);
      that.setData({
        infoA: (b * h).toFixed(2),
        infoX: (b + 2*h).toFixed(2),
        infoR:  ((b * h)/(b + 2*h)).toFixed(2),
        infoB: b
      });
      break;
    case 1:
      var b = Number(that.data.b);
      var h = Number(that.data.h);
      var m = Number(that.data.m);
      console.log(1);
      that.setData({
        infoA: ((b+m*h)*h).toFixed(2),
        infoX: (b + 2*h*Math.sqrt(1+m^2)).toFixed(2),
        infoR:  (((b+m*h)*h)/(b + 2*h*Math.sqrt(1+m^2))).toFixed(2),
        infoB: (b+2*m*h).toFixed(2)
      });
      break;
    case 2:
      var b1 = Number(that.data.b1);
      var b2 = Number(that.data.b2);
      var h = Number(that.data.h);
      var h1 = Number(that.data.h1);
      var m1 = Number(that.data.m1);
      var m2 = Number(that.data.m2);
      that.setData({
        infoA: ((b1+m1*h1)*h1+(h-h1)*(b2+m2*(h-h1))).toFixed(2),
        infoX: (b2-2*m1*h1+2*h1*Math.sqrt(1+m1^2)+2*(h-h1)*Math.sqrt(1+m2^2)).toFixed(2),
        infoR:  (((b1+m1*h1)*h1+(h-h1)*(b2+m2*(h-h1)))/(b2-2*m1*h1+2*h1*Math.sqrt(1+m1^2)+2*(h-h1)*Math.sqrt(1+m2^2))).toFixed(2),
        infoB: (b2+2*m2*(h-h1)).toFixed(2)
      });
      break;
    case 3:
      var h = Number(that.data.h);
      var r = Number(that.data.r);
      that.setData({
        infoA: (0.5 * Math.PI * r^2 + 2*r*(h-r)).toFixed(2),
        infoX: (Math.PI*r + 2*(h-r)).toFixed(2),
        infoR:  (0.5*r*(1+(2*(h-r))/(Math.PI*r + 2*(h-r)))).toFixed(2),
        infoB: (2*r).toFixed(2)
      });
      break;
    case 4:
      var d = Number(that.data.d);
      var h = Number(that.data.h);
      var theta = Number(that.data.theta);
      that.setData({
        infoA: ((d^2 / 8)*(theta- Math.sin(theta))).toFixed(2),
        infoX: (d*theta/2).toFixed(2),
        infoR:  ((d/4)*(1-Math.sin(theta)/theta)).toFixed(2),
        infoB: (2*Math.sqrt(h*(d-h))).toFixed(2)
      });
      break;
    default:
      break;
  }
}
Page({
  data: {
    type:'矩形',
    array: ['矩形', '梯形', '复式断面', 'U型', '圆形'],
    index:0,
    infoA: 0.00,
    infoX: 0.00,
    infoR: 0.00,
    infoB: 0.00,
    b:0.00,
    h:0.00,
    m:0.0,
    b1:0.00,
    b2:0.00,
    h1:0.00,
    m1:0.00,
    m2:0.00,
    r:0.00,
    d:0.00,
    theta:0.00
  },
  bindKeyInputB: function (e) {
    this.setData({
      b:e.detail.value
    });
    changeInfo(e, this);
  },
  bindKeyInputH: function (e) {
    this.setData({
      h:e.detail.value,
    });
    changeInfo(e, this);
  },
  bindKeyInputM: function(e){
    this.setData({
      m:e.detail.value,
    });
    changeInfo(e, this);
  },
  bindKeyInputB1: function(e){
    this.setData({
      b1:e.detail.value,
    });
    changeInfo(e,this);
  },
  bindKeyInputB2: function(e){
    this.setData({
      b2:e.detail.value,
    });
    changeInfo(e,this);
  },
  bindKeyInputH1: function(e){
    this.setData({
      h1:e.detail.value,
    });
    changeInfo(e,this);
  },
  bindKeyInputM1: function(e){
    this.setData({
      m1:e.detail.value,
    });
    changeInfo(e,this);
  },
  bindKeyInputM2: function(e){
    this.setData({
      m2:e.detail.value,
    });
    changeInfo(e,this);
  },
  bindKeyInputR: function(e){
    this.setData({
      r:e.detail.value,
    });
    changeInfo(e,this);
  },
  bindKeyInputD: function(e){
    this.setData({
      d:e.detail.value,
    });
    changeInfo(e,this);
  },
  bindKeyInputTheta: function(e){
    this.setData({
      theta:e.detail.value,
    });
    changeInfo(e,this);
  },
  bindPickerChange: function(e) {
    console.log(this.data.array[e.detail.value]);
    this.setData({
      infoA: 0.00,
      infoX: 0.00,
      infoR: 0.00,
      infoB: 0.00,
      b:0.00,
      h:0.00,
      m:0.0,
      b1:0.00,
      b2:0.00,
      h1:0.00,
      m1:0.00,
      m2:0.00,
      r:0.00,
      d:0.00,
      theta:0.00,
      index: e.detail.value,
      type: this.data.array[e.detail.value]
    })
  },
 
})
