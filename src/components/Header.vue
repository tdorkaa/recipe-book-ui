<template>
  <div id="topnav">
    <a>{{ text }}</a>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["text"]
};
</script>

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
