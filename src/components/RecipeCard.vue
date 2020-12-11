<template>
  <div class="card">
    <div class="container">
      <h4>Recipe 1</h4>
      <p>Description................</p>
      <img src="../assets/logo.png" alt="Food"/>
    </div>
  </div>
</template>

<script>
export default {
name: "RecipeCard"
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 500px;
  margin: 20px;
}

.container {
  padding: 2px 16px;
}
</style>