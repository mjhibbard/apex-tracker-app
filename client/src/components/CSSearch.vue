<template>
    <section class="search">
    <h1>Track Player Stats:</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="platform">Platform</label>
        <select name="Platform" id="platform" v-model="platform">
          <option value="steam">Steam</option>
        </select>
      </div>
      <div class="form-group">
        <label for="gamertag">Gamer Tag</label>
        <input
          type="text"
          name
          v-model="gamertag"
          id="gamertag"
          placeholder="User's handle on Steam: Enter Steam ID, Community URL or Vanity Username"
        />
      </div>
      <div class="form-group">
        <input type="submit" class="btn" />
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      platform: "psn",
      gamertag: ""
    };
  },
  beforeCreate() {
    document.body.className = "body-bg-image";
  },
  methods: {
    onSubmit() {
      if (!this.gamertag) {
        this.$toasted.show("Please enter a gamertag", {
          duration: 3000,
          icon: "exclamation-circle"
        });
      } else {
        this.$router.push(`/profile/${this.platform}/${this.gamertag}`);
      }
    }
  }
};
</script>

<style scoped>
  body{
    background: var(--secondary-bg);
  }
  .body-bg-no-image {
  background: var(--secondary-bg);
}
.body-bg-image {
  background: var(--secondary-bg) url("../assets/csgo-bg-image.png") no-repeat top
    center;
}
</style>