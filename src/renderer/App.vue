<template>
  <div id="app">
     <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="矩形" name="first">
        <el-row :gutter="6">
          <el-col :span="6">
            <el-input v-model="b1" @change="firstChange"  placeholder="请输入底宽b" clearable>
              <template slot="prepend">底宽(b):</template>
            </el-input>
          </el-col>
          <el-col :span="6">
            <el-input v-model="h1" @change="firstChange" placeholder="请输入水深h" clearable>
              <template slot="prepend">水深(h):</template>
            </el-input>
          </el-col>
          <el-col :span="6">
            <el-input v-model="n1" @change="firstChange" placeholder="请输入糙率n" clearable>
              <template slot="prepend">糙率(n):</template>
            </el-input>
          </el-col>
          <el-col :span="6">
            <el-input v-model="i1" @change="firstChange" placeholder="请输入底坡i" clearable>
              <template slot="prepend">底坡(i):</template>
            </el-input>
          </el-col>
        </el-row>

      </el-tab-pane>
      <el-tab-pane label="梯形" name="second">
        <el-row :gutter="6">
          <el-col :span="12">
            <el-input v-model="b2" @change="secondChange"  placeholder="请输入底宽b" clearable>
              <template slot="prepend">底宽(b):</template>
            </el-input>
          </el-col>
          <el-col :span="12">
            <el-input v-model="h2" @change="secondChange" placeholder="请输入水深h" clearable>
              <template slot="prepend">水深(h):</template>
            </el-input>
          </el-col>
          <el-col :span="8">
            <el-input v-model="m2" @change="secondChange" placeholder="请输入坡比m" clearable>
              <template slot="prepend">坡比(m):</template>
            </el-input>
          </el-col>
          <el-col :span="8">
            <el-input v-model="n2" @change="secondChange" placeholder="请输入糙率n" clearable>
              <template slot="prepend">糙率(n):</template>
            </el-input>
          </el-col>
          <el-col :span="8">
            <el-input v-model="i2" @change="secondChange" placeholder="请输入底坡i" clearable>
              <template slot="prepend">底坡(i):</template>
            </el-input>
          </el-col>
        </el-row>

      </el-tab-pane>
      <el-tab-pane label="复式断面" name="third">
        <el-row :gutter="6">
          <el-col :span="12">
            <el-input v-model="b31" @change="thirdChange"  placeholder="请输入底宽b1" clearable>
              <template slot="prepend">底宽(b1):</template>
            </el-input>
          </el-col>
          <el-col :span="12">
            <el-input v-model="b32" @change="thirdChange" placeholder="请输入底宽b2" clearable>
              <template slot="prepend">底宽(b2):</template>
            </el-input>
          </el-col>
          <el-col :span="12">
            <el-input v-model="h3" @change="thirdChange" placeholder="请输入水深h" clearable>
              <template slot="prepend">水深(h):</template>
            </el-input>
          </el-col>
          <el-col :span="12">
            <el-input v-model="h31" @change="thirdChange" placeholder="请输入水深h1" clearable>
              <template slot="prepend">底部水深(h1):</template>
            </el-input>
          </el-col>

          <el-col :span="12">
            <el-input v-model="m31" @change="thirdChange" placeholder="请输入底部坡比m1" clearable>
              <template slot="prepend">底部坡比(m1):</template>
            </el-input>
          </el-col>
          <el-col :span="12">
            <el-input v-model="m32" @change="thirdChange" placeholder="请输入上部坡比m2" clearable>
              <template slot="prepend">上部坡比(m2):</template>
            </el-input>
          </el-col>
          <el-col :span="12">
            <el-input v-model="n3" @change="thirdChange" placeholder="请输入糙率n" clearable>
              <template slot="prepend">糙率(n):</template>
            </el-input>
          </el-col>
          <el-col :span="12">
            <el-input v-model="i3" @change="thirdChange" placeholder="请输入底坡i" clearable>
              <template slot="prepend">底坡(i):</template>
            </el-input>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="U型" name="fourth">
        <el-row :gutter="6">
          <el-col :span="12">
            <el-input v-model="h4" @change="fourthChange"  placeholder="请输入水深h" clearable>
              <template slot="prepend">水深(h):</template>
            </el-input>
          </el-col>
          <el-col :span="12">
            <el-input v-model="r4" @change="fourthChange" placeholder="请输入半径r" clearable>
              <template slot="prepend">半径(r):</template>
            </el-input>
          </el-col>
          <el-col :span="12">
            <el-input v-model="n4" @change="fourthChange" placeholder="请输入糙率n" clearable>
              <template slot="prepend">糙率(n):</template>
            </el-input>
          </el-col>
          <el-col :span="12">
            <el-input v-model="i4" @change="fourthChange" placeholder="请输入底坡i" clearable>
              <template slot="prepend">底坡(i):</template>
            </el-input>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="圆形" name="five">
        <el-row :gutter="6">
          <el-col :span="8">
            <el-input v-model="h5" @change="fiveChange"  placeholder="请输入水深h" clearable>
              <template slot="prepend">水深(h):</template>
            </el-input>
          </el-col>
          <el-col :span="8">
            <el-input v-model="d5" @change="fiveChange" placeholder="请输入直径d" clearable>
              <template slot="prepend">直径(d):</template>
            </el-input>
          </el-col>
          <el-col :span="8">
            <el-input v-model="t5" @change="fiveChange" placeholder="请输入角度(θ):" clearable>
              <template slot="prepend">角度(θ):</template>
            </el-input>
          </el-col>
          <el-col :span="12">
            <el-input v-model="n5" @change="fiveChange" placeholder="请输入糙率n" clearable>
              <template slot="prepend">糙率(n):</template>
            </el-input>
          </el-col>
          <el-col :span="12">
            <el-input v-model="i5" @change="fiveChange" placeholder="请输入底坡i" clearable>
              <template slot="prepend">底坡(i):</template>
            </el-input>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <el-table :data="result" style="width: 100%">
      <el-table-column prop="name" label="参数"></el-table-column>
      <el-table-column prop="value" label="值"></el-table-column>
    </el-table>
  </div>

</template>
<script>
  export default {
    name: 'water',
    data() {
      return {
        activeName: 'first',
        b1:0.00,
        h1:0.00,
        n1:0.00,
        i1:0.00,
        b2:0.00,
        h2:0.00,
        m2:0.00,
        n2:0.00,
        i2:0.00,
        b31:0.00,
        b32:0.00,
        h3:0.00,
        h31:0.00,
        m31:0.00,
        m32:0.00,
        n3:0.00,
        i3:0.00,
        h4:0.00,
        r4:0.00,
        n4:0.00,
        i4:0.00,
        h5:0.00,
        d5:0.00,
        t5:0.00,
        n5:0.00,
        i5:0.00,
        result: [
          {'name': '过水断面面积(A)',value: 0.00},
          {name: '湿周(χ)',value: 0.00},
          {name: '水力半径(R)',value: 0.00},
          {name: '水面宽(B)',value: 0.00},
          {name: '流速(v)',value: 0.00},
          {name: '流量(Q)',value: 0.00}
        ],
      };
    },
    methods: {
      handleClick(tab, event) {
        this.result[0]["value"] = 0.00;
        this.result[1]["value"] = 0.00;
        this.result[2]["value"] = 0.00;
        this.result[3]["value"] = 0.00;
        this.result[4]["value"] = 0.00;
        this.result[5]["value"] = 0.00;
      },
      //矩形数据处理
      firstChange(){
        var math = this.$math;
        var b = Number(this.b1);
        var h = Number(this.h1);
        var n = Number(this.n1);
        var i = Number(this.i1);

        var a = (b*h).toFixed(2);
        this.result[0]["value"] = a;

        this.result[1]["value"] = (b+2*h).toFixed(2);

        var r = ((b*h)/(b+2*h)).toFixed(2);
        this.result[2]["value"] = r;

        this.result[3]["value"] = (b).toFixed(2);

        var v=(
          math.pow(r, 2/3)
          *math.sqrt(i)/n
          ).toFixed(2);
        this.result[4]["value"] = v;

        var q = a*v;
        this.result[5]["value"] = (q).toFixed(2);
      },

      //梯形数据处理
      secondChange(){
        var math = this.$math;
        var b = Number(this.b2);
        var h = Number(this.h2);
        var m = Number(this.m2);
        var n = Number(this.n2);
        var i = Number(this.i2);

        var a = ((b+m*h)*h).toFixed(2);//过水断面面积
        this.result[0]["value"] = a;
        this.result[1]["value"] = (b+2*h*math.sqrt(1+math.pow(m,2))).toFixed(2);

        var r =(((b+m*h)*h)/(b + 2*h*math.sqrt(1+math.pow(m,2)))).toFixed(2);
        this.result[2]["value"] = r; //水力半径

        this.result[3]["value"] = (b+2*m*h).toFixed(2);

        var v = (
          math.pow(r, 2/3)
          *math.sqrt(i)/n
        ).toFixed(2);
        this.result[4]["value"] = v;

        var q = v * a;
        this.result[5]["value"] = (q).toFixed(2);
      },

      //复式断面
      thirdChange(){
        var math = this.$math;
        var b1 = Number(this.b31);
        var b2 = Number(this.b32);
        var h = Number(this.h3);
        var h1 = Number(this.h31);
        var m1 = Number(this.m31);
        var m2 = Number(this.m32);
        var n = Number(this.n3);
        var i = Number(this.i3);

        var a = ((b1+m1*h1)*h1+(h-h1)*(b2+m2*(h-h1))).toFixed(2);
        this.result[0]["value"] = a;

        this.result[1]["value"] =(
          b2-2*m1*h1
          +2*h1*math.sqrt(1+math.pow(m1,2))
          +2*(h-h1)*math.sqrt(1+math.pow(m2,2))
        ).toFixed(2);

        var r =  (
          ((b1+m1*h1)*h1+(h-h1)*(b2+m2*(h-h1)))
          /(b2-2*m1*h1+2*h1*math.sqrt(1+math.pow(m1,2))
            +2*(h-h1)*math.sqrt(1+math.pow(m2,2)))
        ).toFixed(2);
        this.result[2]["value"] = r;

        this.result[3]["value"] = (b2+2*m2*(h-h1)).toFixed(2);

        if(isNaN(r)){
          var v = 0.00;
        }else{
          var v=(
            math.pow(r, 2/3)
            *math.sqrt(i)/n
            ).toFixed(2);
        }

        this.result[4]["value"] = v;

        var q = a*v;
        this.result[5]["value"] = (q).toFixed(2);
      },

      //U型
      fourthChange(){
        var math = this.$math;
        var h = Number(this.h4);
        var r4 = Number(this.r4);
        var n = Number(this.n4);
        var i = Number(this.i4);

        var a = (0.5 * Math.PI * math.pow(r4,2) + 2*r4*(h-r4)).toFixed(2);
        this.result[0]["value"] = a;

        this.result[1]["value"] = (Math.PI*r4 + 2*(h-r4)).toFixed(2);

        var r = (0.5*r4*(1+(2*(h-r4))/(Math.PI*r4 + 2*(h-r4)))).toFixed(2);
        this.result[2]["value"] = r;

        this.result[3]["value"] = (2*r4).toFixed(2);

        var v=(
          math.pow(r, 2/3)
          *math.sqrt(i)/n
          ).toFixed(2);
        this.result[4]["value"] = v;

        var q = a*v;
        this.result[5]["value"] = (q).toFixed(2);
      },
      fiveChange(){
          var math = this.$math;
          var h= Number(this.h5);
          var d= Number(this.d5);
          var t = Number(this.t5);
          var n = Number(this.n5);
          var i = Number(this.i5);

          var a = ((math.pow(d,2) / 8)*(t- Math.sin(t))).toFixed(2);
          this.result[0]["value"] = a;

          this.result[1]["value"] = (d*t/2).toFixed(2);

          var r = ((d/4)*(1-Math.sin(t)/t)).toFixed(2);
          this.result[2]["value"] = r;

          this.result[3]["value"] = (2*Math.sqrt(h*(d-h))).toFixed(2);

          /*
          var v=(
            math.pow(r, 2/3)
            *math.sqrt(i)/n
            ).toFixed(2);*/
          if(isNaN(r)){
            var v = 0.00;
          }else{
            var v=(
              math.pow(r, 2/3)
              *math.sqrt(i)/n
              ).toFixed(2);
          }
          this.result[4]["value"] = v;

          var q = a*v;
          this.result[5]["value"] = (q).toFixed(2);
      }
    },
  };
</script>

<style>
  /* CSS */
</style>
