<template>
  <div class="user">

    <h1>OUECH C LA PAGE USER </h1>
    msg : {{msg}}
    saucisse : {{saucisse}}
    en dessous y'a un router-view

    <br/>
    <router-view />

  </div>
</template>

<script>


  export default {
    name: 'User',
    components : {
    },
    props: {
      msg: String,
      saucisse : String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->





<style lang="scss">
  // B_E-M
  /*

  priorité CSS : C'est le plus précis qui gagne
  - precision basse : tag <h3>
  - precision moyenne : classes .classe
  - precision haute : identifiant id="xxx"
  - override : ligne de définition de style qui fini par !important
   */
  // Variable
  $maCouleurDeBase: blueviolet;
  // mixins
  @mixin highlightedText {
    font-size: 48rem;
  }

  // function/mixins
  @mixin size-text($size : 8)  {
    font-size: $size rem;
    margin: $size/2 px;
    box-shadow: $size/2, $size/2, $size/2, rgba(0,0,0,.25);
  }

  // /!\ en SASS/SCSS les noms de variables ou mixins ou function ne sont pas la dif
  // $mon-poney <==> $mon_poney

  .user{ // block

    h3 {
      color: $maCouleurDeBase;
      @include highlightedText;
      @include size-text(10);

      &.prout{ // h3.prout
        font-weight: 600 ;
      }
    }

    h2{
      @extend h3;
      @include size-text(9);
    }

  }

</style>
