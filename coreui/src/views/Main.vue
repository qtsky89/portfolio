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
        <template v-for="project in projects">
          <b-col v-if="dropdownText === 'all' || project.constraint == dropdownText" md="4" sm="6" :key="project.name">
            <b-card
              class="mb-3"
              align="center"
              :img-src="project.image"
              img-top
              hover="true"
            >
              <b-card-text>{{ project.name }}</b-card-text>
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
      dropdownText: "all",
      dropdownGroup: ["all", "company", "personal"],
      projects: [],
    };
  },
  mounted() {
    this.$axios.get(this.$store.state.DJANGO + "/api/v1/project")
      .then((response) => {
        this.projects = response.data["item"];
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    dropdownClick(g) {
      this.dropdownText = g;
    },
  },
};
</script>

<style scoped></style>
