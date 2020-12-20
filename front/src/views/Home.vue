<template>
  <div class="text-left">
    <b-card class="port">
      <h1>Portfolio</h1>
      <hr />
      <b-dropdown class="m-md-2" text="All"></b-dropdown>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
//import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Home",
  components: {
    //HelloWorld
  }
});
</script>

<style scoped>
.port {
  padding: 3rem;
}
</style>
