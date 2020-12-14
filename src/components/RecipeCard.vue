<template>
  <div class="card">
    <div class="container">
      <h4>{{ recipe.name }}</h4>
      <p>{{ recipe.description }}</p>
      <img class="card-image" :src="recipe.imgSrc" alt="Food" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: ["recipe"]
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 500px;
  margin: 20px;
}

.container {
  padding: 2px 16px;
}

.card-image {
  width: 400px;
}
</style>
