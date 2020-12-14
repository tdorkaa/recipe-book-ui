<template>
  <div>
    <RecipeCard
      v-bind:recipe="recipe"
      v-for="recipe in recipes"
      :key="recipe.name"
    />
  </div>
</template>

<script>
import RecipeCard from "@/components/RecipeCard";
import store from "../store";

export default {
  name: "Recipes",
  components: {
    RecipeCard
  },
  computed: {
    recipes: () => store.getters.getRecipes
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
