<template>
  <div class="home">
      <div class="background1"></div>

    <div class="texte">
      <h1>TEAM BEAST</h1>

      <button id="boutton" v-on:click="openContent()"><a href="#content">DECOUVRIR</a></button>
    </div>



    <div id="content" style="display: none">
      <h2>D'où vient-on</h2>
      <p class="textLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, odio vel cursus consectetur, libero urna bibendum tellus, quis dignissim massa mi a orci. Vestibulum in felis convallis, pulvinar lectus non, porta sem. Morbi lacinia quis massa ac viverra. Etiam vehicula elit eget fermentum vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus semper fermentum molestie. Nam euismod posuere tellus, et scelerisque ex. Nulla dignissim interdum commodo. Nulla fermentum mi sed nisi faucibus, nec dignissim dui finibus. Vestibulum scelerisque, eros vel malesuada finibus, turpis neque tempor purus, nec aliquet tellus purus ut erat. Curabitur eleifend id ex ut aliquet. Nam vestibulum convallis ullamcorper. Suspendisse porta commodo faucibus. Nam ullamcorper, felis sed venenatis aliquam, velit nulla dictum nibh, ac consectetur est augue lobortis velit.</p>

      <img src="../assets/photoPote.jpg" alt="photo des coupains" id="imageTeam">

      <h2 class="titleRight">Mais qui somme nous ?</h2>
      <p class="textRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, odio vel cursus consectetur, libero urna bibendum tellus, quis dignissim massa mi a orci. Vestibulum in felis convallis, pulvinar lectus non, porta sem. Morbi lacinia quis massa ac viverra. Etiam vehicula elit eget fermentum vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus semper fermentum molestie. Nam euismod posuere tellus, et scelerisque ex. Nulla dignissim interdum commodo. Nulla fermentum mi sed nisi faucibus, nec dignissim dui finibus. Vestibulum scelerisque, eros vel malesuada finibus, turpis neque tempor purus, nec aliquet tellus purus ut erat. Curabitur eleifend id ex ut aliquet. Nam vestibulum convallis ullamcorper. Suspendisse porta commodo faucibus. Nam ullamcorper, felis sed venenatis aliquam, velit nulla dictum nibh, ac consectetur est augue lobortis velit.</p>

      <img src="../assets/coque-tel.jpg" alt="coque de téléphone" id="imageCoque">
    </div>


    </div>
</template>



<style>
/*Objets de base*/
h1{
  color: white;
  font-family: 'Archivo Black', arial;
  font-size: 90px;
  letter-spacing: 8px;
}

a {
  text-decoration: none;
  color: inherit;

}

p{
  letter-spacing: 1px;
}



/*Les classes*/

/*background */
.background1{
  /* The image used */
  background-image: url("../assets/backgroundKeyboard.jpg");

  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);

  /* Full height */
  height: 920px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;


}

.texte{
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.5); /* Black w/opacity/see-through */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 40%;
  padding: 20px;
  text-align: center;
}

.textLeft{
  margin-right: 60%;
  margin-top: 50px;
  margin-left: 10%;
  text-justify: inter-word;
}

.textRight{
  margin-left: 60%;
  margin-top: 100px;
  margin-right: 10%;
  text-justify: inter-word;
}

.titleRight{
  margin-top: 150px;
}

/*Les Ids*/

#boutton{
  color: white;
  font-family: Calibri;
  font-size: 25px;
  border: 2px white ;
  font-weight: normal;
  letter-spacing: 5px;
  background-color: transparent;
  border: solid white ;
  vertical-align: center;
  text-align: center;
  display: inline-block;
  padding: 10px;
  width: 220px;
  transition-duration: 0.2s;
}



#boutton:hover{
  background-color: white;
  cursor: pointer;
  width: 200px;
  transition-duration: 250ms;
  color: black;
}

#imageTeam{
  width: 700px;
  position: absolute;
  top: 1000px; right: 10%;
}

#imageCoque{
  width: 700px;
  position: absolute;
  top: 1600px; left: 10%;
}

#content{
  margin-top: 100px;
  color: white;
}


</style>





<script>
export default {
  name: 'Home',
  methods:{
    openContent: function (){
      var content = document.getElementById('content');
      content.style.display = 'inline-block';

      // var content = document.getElementById('example');
      // content.style.color = 'blue';

    }
  }
}
</script>
