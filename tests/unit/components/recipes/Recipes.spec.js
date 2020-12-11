import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Recipes from "@/components/Recipes.vue";

describe("Recipes.vue", () => {
  it("renders Recipes page with top bar text", () => {
    const text = "Recipes";
    const wrapper = shallowMount(Recipes);
    expect(wrapper.text()).to.include(text);
  });
});
