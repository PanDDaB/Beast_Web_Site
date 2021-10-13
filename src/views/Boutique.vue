<template>
  <div class="boutique">
<!--    <h1>Boutique</h1>-->

<!--    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit metus quis accumsan iaculis. Aliquam pulvinar est non dapibus iaculis. Sed non posuere nunc. Nunc vitae tellus eget ipsum elementum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean a leo ipsum. Duis tincidunt tincidunt sapien a luctus. Nunc tempor, libero a bibendum ultrices, sapien metus consequat enim, vel elementum purus urna at dui. Morbi sed tincidunt nisl. Ut faucibus at lacus at congue. Etiam cursus dolor mi, pharetra blandit sapien sollicitudin at.</p>-->
<!--    <img src="../assets/hoodie.jpeg" alt="photo d'un hoodie" class="photoVente">-->

<!--    <br>-->

   <Carousel>
     <carousel-slide v-for="(slide,index) in slides" :key="slide" :index="index" class="carousel-slider">
       <img :src="slide" :alt="slide">
     </carousel-slide>
   </Carousel>

  </div>
</template>

<script>
import Carousel from "./Carousel";
import CarouselSlide from "./CarouselSlide";


export default {
  name: "Boutique",
  components : {
    Carousel,
    CarouselSlide
  },
  data() {
    return {
      slides: [
        'https://picsum.photos/id/230/600/300',
        'https://picsum.photos/id/231/600/300',
        'https://picsum.photos/id/232/600/300',
        'https://picsum.photos/id/233/600/300',
        'https://picsum.photos/id/234/600/300',
        'https://picsum.photos/id/235/600/300',
        'https://picsum.photos/id/236/600/300',
      ],
      visibleSlide: 0,
    }
  }
}
</script>

<style scoped>
p{
  color: white;
}

.photoVente{
 width: 300px;
}




</style>
