<template>
  <div class="text-left">
    <b-card class="port">
      <h1>Wonhee Project</h1>
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
        <b-col cols="4" v-for="(doc, idx) in docList" :key="idx">
          <b-card-group deck>
            <b-card
              :idx="idx"
              class="mb-3"
              align="center"
              :img-src="doc.img"
              img-top
              hover="true"
            >
              <b-card-text>{{ doc.name }}</b-card-text>
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
      docList: [
        {
          name: "Naver ClouD Search",
          img: "https://wonhee-image.s3.ap-northeast-2.amazonaws.com/ClouS_Logo_Fullcolor1.png"
        },
        {
          name: "Naver CI/CD Builder",
          img: "https://wonhee-image.s3.ap-northeast-2.amazonaws.com/CitruS_Logo_Fullcolor1.png"
        },
        {
          name: "Naver Golang Search Library",
          img: "https://wonhee-image.s3.ap-northeast-2.amazonaws.com/CitruS_Logo_Fullcolor1.png"
        }
      ]
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
