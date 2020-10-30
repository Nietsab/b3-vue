<template>
  <div id="app">
    <header>
      <img alt="Vue logo" src="./assets/logo.png">
      <nav>
        <router-link to="/">Home to="/" </router-link> |<br/>

          <router-link v-bind:to="{path: '/'}">Home v-bind:to="{path: '/'}"</router-link> |<br/>
          <router-link :to="'/'">Home :to="'/'"</router-link> |<br/>

        <router-link v-bind:to="{name: 'home'}">Home v-bind:to="{name: 'home'}"</router-link> |<br/>
        <router-link :to="{name: 'home', params: {paramNonTraite : 'prout'}}">Home v-bind:to="{name: 'home', params: {paramNonTraite : 'prout'}}"</router-link> |<br/>



        <router-link to="/user">user</router-link> |
        <router-link to="/user/monUserId1">user detail </router-link> |
        <router-link to="/user/monUserId2/action/monActionDeUser">user detail action</router-link> |
      </nav>
    </header>

    <router-view/> <!-- name="default" -->
    <router-view name="main"/>
    <router-view name="aside"/>

  <footer>
    footer de la win
  </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: function(){
    return {
      lyonOuMarseille : 48
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
