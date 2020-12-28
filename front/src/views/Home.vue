<template>
  <div class="text-left">
    <b-card class="port">
      <h1>Text</h1>
      <hr />
      <b-dropdown :text="dropdownText" variant="outline-primary">
        <template v-for="g in dropdownGroup">
          <b-dropdown-item :key="g" @click="dropdownClick(g)">
            {{ g }}
          </b-dropdown-item>
        </template>
      </b-dropdown>
      <br />
      <br />

      <b-row>
        <b-col cols="4" v-for="(list, idx) in docList" :key="idx">
          <b-card-group deck>
            <b-card
              :idx="idx"
              class="mb-3"
              align="center"
              img-src="https://picsum.photos/id/1/600/300"
              img-top="true"
              hover="true"
            >
              <b-card-text>{{ list }}</b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
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
      dropdownGroup: ["All", "Company", "Personal"],
      docList: ["p1", "p2", "p3", "p4", "p5"]
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

.portImage {
  padding: 0rem;
}
</style>
