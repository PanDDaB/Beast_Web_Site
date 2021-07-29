<template>
  <div id="app">
    <!-- narBar-->


    <!--Les liens -->




    <!--menu-->
    <div id="myNav" class="overlay">

      <div class="burger">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"><span></span></a>
      </div>

      <div class="overlay-content">

        <router-link to="/">Home</router-link>
        <router-link to="/boutique">Boutique</router-link>
        <router-link to="/jeux">Jeux</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-view/>

      </div>

    </div>


  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a{
  color: #42b983;
}

/*navBar*/
/*création du burger*/
.burger{
  width: 42px;
  height: 24px;
  cursor: pointer;
  position: relative;
}

.burger span{
  width: 100%;
  height: 4px;
  background-color: black;
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.5s ease-in-out;
}

.burger span::before, .burger span::after{
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: black;
  transition: transform 0.5s ease-in-out ;
}

.burger span::before{
  transform: translateY(-10px);
}

.burger span::after{
  transform: translateY(10px);
}

/*mise en animation*/
/*disparition barre milieu*/
.burger.active span{
  background-color: transparent;
}

/*creation de la croix*/
.burger.active span::before{
  transform: translateY(0px) rotateZ(45deg);
}

.burger.active span::after{
  transform: translateY(0px) rotateZ(-45deg);
}

/*interieur du menu*/

.overlay{
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: black;
  /*overflow-x: hidden;*/
  transition: 0.5s;
}

.overlay-content{
  position: relative;
  top: 30%;
  width: 100%;
  text-align: center;
}

.overlay router-link{
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover, .overlay a:focus{
  color: #f1f1f1;
}

.overlay .closebtn{
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

</style>

<script>
export default {
  computed: {
    openNav(){
      return document.getElementById("myNav").style.width = "100%";

    }
  },
  mounted(){
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', ()=> {
      burger.classList.toggle('active');
    } );
  }




}
</script>
