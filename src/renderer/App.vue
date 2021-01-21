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
      <el-tab-pane label="梯形" name="second">梯形</el-tab-pane>
      <el-tab-pane label="复式断面" name="third">复式断面</el-tab-pane>
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
        this.result[0]["value"] = (b*h).toFixed(2);
        this.result[1]["value"] = (b+2*h).toFixed(2);
        this.result[2]["value"] = ((b*h)/(b+2*h)).toFixed(2);
        this.result[3]["value"] = (b).toFixed(2);

        var v=(
          math.pow(((b*h)/(b+2*h)), 2/3)
          *math.sqrt(i)/n
          ).toFixed(2);
        this.result[4]["value"] = v;
        var q = v * (b*h).toFixed(2);
        this.result[5]["value"] = (q).toFixed(2);
      }
    },
  };
</script>

<style>
  /* CSS */
</style>
