<template>
  <div class="text-left">
    <b-card class="port">
      <h1>Portfolio</h1>
      <hr />
      <b-dropdown :text="dropdownText" variant="outline-primary">
        <template v-for="g in dropdownGroup">
          <b-dropdown-item :key="g" @click="dropdownClick(g)">
            {{ g }}
          </b-dropdown-item>
        </template>
      </b-dropdown>
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
  },
  data() {
    return {
      dropdownText: "All",
      dropdownGroup: ["All", "Company", "Personal"]
    };
  },
  methods: {
    dropdownClick(g: string) {
      this.dropdownText = g;
    }
  }
});
</script>

<style scoped>
.port {
  padding: 3rem;
}
</style>
