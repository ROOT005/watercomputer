<template>
  <div id="app">
     <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="矩形" name="first">
        <el-row>
          <el-col :span="4"><div class="grid-content">底宽(b):</div></el-col>
          <el-col :span="8">
            <div class="grid-content">
              <el-input v-model="input" placeholder="请输入底宽b"></el-input>
            </div>
          </el-col>
          <el-col :span="4"><div class="grid-content">水深(h):</div></el-col>
          <el-col :span="8">
            <div class="grid-content">
              <el-input v-model="input" placeholder="请输入水深h"></el-input>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="梯形" name="second">梯形</el-tab-pane>
      <el-tab-pane label="复式断面" name="third">复式断面</el-tab-pane>
      <el-tab-pane label="U型" name="fourth">U型</el-tab-pane>
      <el-tab-pane label="圆形" name="five">圆形</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: 'water',
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
  }
</script>

<style>
  /* CSS */
</style>
