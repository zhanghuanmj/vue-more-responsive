<!--
* author: zhanghuan
* created: 2018/4/20
* describe: 页眉
-->
<template>
  <el-row class="v-header">
    <el-col :span="12">
      <h1 class="logo">
        <a href="/"><img src="static/img/logo.png"/></a>
      </h1>
    </el-col>
    <el-col :span="12" class="right-cnt">
      <span>{{$t('login.chooseTip')}}</span>
      <span @click="setLang('en')" class="set-lang">English</span>
      <span @click="setLang('cn')" class="set-lang">简体中文</span>
    </el-col>
  </el-row>
</template>

<script>
  import * as Cookies from 'tiny-cookie';
  export default {
    name: 'vHeader',
    data () {
      return {

      }
    },
    methods: {
      /*
       * params: 语种
       * return: true
       * function: 设置语言
       * */
      setLang: function (lang) {
        if (Cookies.get('lang') === lang) {
          return true;
        }
        this.$i18n.locale = lang;
        Cookies.set('lang', lang);
        return true;
      }
    },
    mounted: function () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../style/common.scss";
  .v-header{
    height: px2(120);
    padding-top: px2(40);
    margin-bottom: px2(114);

    .logo{
      width: px2(448);
      height: px2(72);
      padding: 0;
      margin: 0;
      overflow: hidden;

      a{
        display: block;
        height: 100%;

        img{
          width: 100%;
        }
      }
    }

    .right-cnt{
      text-align: right;

      span{
        padding-left: px2(34);
      }
      .set-lang{
        color: $mainClr;
        cursor: pointer;
      }
    }
  }
</style>
