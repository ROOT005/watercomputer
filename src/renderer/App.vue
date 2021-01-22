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

          <el-col :span="8">
            <el-input v-model="m31" @change="thirdChange" placeholder="请输入底部坡比m1" clearable>
              <template slot="prepend">底部坡比(m1):</template>
            </el-input>
          </el-col>
          <el-col :span="8">
            <el-input v-model="m32" @change="thirdChange" placeholder="请输入上部坡比m2" clearable>
              <template slot="prepend">上部坡比(m2):</template>
            </el-input>
          </el-col>
          <el-col :span="8">
            <el-input v-model="n3" @change="thirdChange" placeholder="请输入糙率n" clearable>
              <template slot="prepend">糙率(n):</template>
            </el-input>
          </el-col>
          <el-col :span="8">
            <el-input v-model="i3" @change="thirdChange" placeholder="请输入底坡i" clearable>
              <template slot="prepend">底坡(i):</template>
            </el-input>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="U型" name="fourth">U型</el-tab-pane>
      <el-tab-pane label="圆形" name="five">圆形</el-tab-pane>
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
        /*var b = Number(this.b1);
        var h = Number(this.h1);
        var n = Number(this.n1);
        var i = Number(this.i1);*/
      }
    },
  };
</script>

<style>
  /* CSS */
</style>
