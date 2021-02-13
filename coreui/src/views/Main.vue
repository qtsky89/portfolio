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
        <template v-for="doc in docList">
          <b-col md="4" sm="6" :key="doc.name">
            <b-card
              class="mb-3"
              align="center"
              :img-src="doc.img"
              img-top
              hover="true"
            >
              <b-card-text>{{ doc.name }}</b-card-text>
            </b-card>
          </b-col>
        </template>
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
          img: "https://wonhee-image.s3.ap-northeast-2.amazonaws.com/clous.png",
        },
        {
          name: "CI/CD Builder",
          img:
            "https://wonhee-image.s3.ap-northeast-2.amazonaws.com/citrus.png",
        },
        {
          name: "Golang Search Library",
          img: "https://wonhee-image.s3.ap-northeast-2.amazonaws.com/gosas.png",
        },
        {
          name: "Devp Ops",
          img:
            "https://wonhee-image.s3.ap-northeast-2.amazonaws.com/devops.png",
        },
        {
          name: "Portfolio",
          img:
            "https://wonhee-image.s3.ap-northeast-2.amazonaws.com/portfolio.png",
        },
        {
          name: "Portfolio",
          img:
            "https://wonhee-image.s3.ap-northeast-2.amazonaws.com/portfolio.png",
        },
        {
          name: "Portfolio",
          img:
            "https://wonhee-image.s3.ap-northeast-2.amazonaws.com/portfolio.png",
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
