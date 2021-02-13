<template>
  <div>
    <b-card>
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
        <b-col md="12">
          <b-card-group deck>
            <template v-for="(doc, idx) in docList">
              <b-card
                :key="idx"
                :idx="idx"
                class="mb-3"
                align="center"
                :img-src="doc.img"
                img-top
                hover="true"
              >
                <b-card-text>{{ doc.name }}</b-card-text>
              </b-card>
            </template>
          </b-card-group>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {},
  data() {
    return {
      dropdownText: "All",
      dropdownGroup: ["All", "Company", "Personal"],
      docList: [
        {
          name: "Cloud Search",
          img: "https://wonhee-image.s3.ap-northeast-2.amazonaws.com/ClouS_Logo_Fullcolor1.png"
        },
        {
          name: "CI/CD Builder",
          img: "https://wonhee-image.s3.ap-northeast-2.amazonaws.com/CitruS_Logo_Fullcolor1.png"
        },
        {
          name: "Golang Search Library",
          img: "https://wonhee-image.s3.ap-northeast-2.amazonaws.com/CitruS_Logo_Fullcolor1.png"
        },
      ],
    };
  },
  methods: {
    dropdownClick(g) {
      this.dropdownText = g;
    },
  },
};
</script>

<style scoped></style>
