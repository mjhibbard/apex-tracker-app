<template>
  <section class="search">
    <h1>Track Player Stats:</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="platform">Platform</label>
        <select name="Platform" id="platform" v-model="platform">
          <option value="psn">Playstation</option>
          <option value="xbl">Xbox</option>
          <option value="Origin">Origin</option>
        </select>
      </div>
      <div class="form-group">
        <label for="gamertag">Gamer Tag</label>
        <input
          type="text"
          name
          v-model="gamertag"
          id="gamertag"
          placeholder="Origin ID, Xbox Live GamerTag, etc"
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

<style>
body {
  background: var(--primary-color);
}
.body-bg-no-image {
  background: var(--primary-color);
}
.body-bg-image {
  background: var(--primary-color) url("../assets/octane.png") no-repeat top
    center;
}

@media (max-width: 700px) {
  body {
    background: var(--primary-color);
  }
}
</style>