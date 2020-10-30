<template>
  <div class="userdetail">
    <h3>userdetail</h3>
    msg : {{msg}}
    saucisse : {{saucisse}}
  </div>
</template>

<script>


export default {
  name: 'UserDetail',
  components : {
  },
  props: {
    msg: String,
    saucisse : String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
   color: red;
  }
</style>
