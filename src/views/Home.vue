<template>
  <div class="home">
    <Header v-bind:text="headerText" />
    <Recipes />
  </div>
</template>

<script>
// @ is an alias to /src
import Recipes from "@/components/Recipes.vue";
import Header from "@/components/Header";

export default {
  name: "Home",
  components: {
    Header,
    Recipes
  },
  data: function() {
    return {
      headerText: "Recipes"
    };
  }
};
</script>
