<template>
  <div class="home">
    <div class="background">
      <div class="blur"></div>
    </div>
      <h1>TEAM BEAST</h1>
      <p>Aussi puissant qu'une mouche</p>
  </div>
</template>
<style>
body{
  background-image: url("../assets/backgroundKeyboard.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position-y: -150px;
  /*backdrop-filter: blur(8px);*/
}

</style>
<script>
export default {
  name: 'Home'
}
</script>
