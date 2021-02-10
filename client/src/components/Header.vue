<template>
  <header>
    <div class="header-img__wrap">
      <router-link to="/">
        <img :src="image" />
      </router-link>
      <router-link to="/csgo">
        <img :src="image2" /> 
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      image: require("@/assets/logo.png"),
      image2: require("@/assets/csgo-logo.png")
    };
  }
};
</script>

<style scoped>
img {
  width: 300px;
}
.header-img__wrap {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 700px) {
  img {
    display: block;
    margin: auto;
  }
}
</style>