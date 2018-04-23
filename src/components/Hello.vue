<template>
  <div class="hello">
    <h1>{{ $t('login.title') }}</h1>
    <i class="el-icon-edit"></i>
  </div>
</template>

<script>
  import $public from '../js/public';
  import URL from '../js/urlConfig';
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted: function () {
      $public.getRequest({
        url: URL.test,
        type: 'GET',
        data: {id: 1}
      }, (res) => {

      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
  background-color: red;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  color: green;
}

a {
  color: #42b983;
}
</style>
