import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const recipes = [
  {
    name: "Recipe1",
    description: "Description ................",
    imgSrc:
      "https://image-api.nosalty.hu/nosalty/images/recipes/n0/Lh/tiramisu-5-igazi.jpeg?w=640&h=480&fit=crop&s=86cbdf973c14ed0d8f3a1fe515beab01"
  },
  {
    name: "Recipe2",
    description: "Description ................",
    imgSrc:
      "https://image-api.nosalty.hu/nosalty/images/recipes/n0/Lh/tiramisu-5-igazi.jpeg?w=640&h=480&fit=crop&s=86cbdf973c14ed0d8f3a1fe515beab01"
  }
];

export default new Vuex.Store({
  state: {
    recipes: recipes
  },
  getters: {
    getRecipes: state => {
      return state.recipes;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
