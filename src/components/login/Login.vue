<!--
* author: zhanghuan
* created: 2018/4/20
* describe: 登录首页
-->
<template>
  <div class="login">
    <v-header></v-header>
    <el-row>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import VHeader from "../common/vHeader";
import $public from "../../js/public";
import URL from "../../js/urlConfig";
export default {
  data() {
    return {

    }
  },
  components: {
    VHeader
  },
  methods: {
    /*
    * params: 无
    * return: 无
    * function: 初始化
    * */
    init: function () {
      $public.getRequest({
        url: URL.test,
        type: 'GET',
        data: {id: 1}
      }, (res) => {

      });
    }
  },
  mounted: function () {
    this.init();
  }
}
</script>

<style scoped lang="scss">
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
