<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link><span> | </span> 
      <router-link to="/about">About</router-link><span> | </span> 
      <router-link to="/services">Services</router-link><span> | </span> 
      <router-link to="/fotos/1">Fotos</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}
</style>
