<template>
  <div>
    <div id="topnav">
      <a>Recipes</a>
    </div>
    <RecipeCard/>
    <RecipeCard/>
  </div>
</template>

<script>

import RecipeCard from "@/components/RecipeCard";

export default {
  name: "Recipes",
  components: {
    RecipeCard
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#topnav {
  overflow: hidden;
  background-color: #cc040b;
}

#topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
}
</style>
