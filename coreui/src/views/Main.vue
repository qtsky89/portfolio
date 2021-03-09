<template>
  <div>
    <b-card>
      <b-dropdown
        :text="dropdownText"
        variant="outline-primary"
      >
        <template v-for="g in dropdownGroup">
          <b-dropdown-item
            :key="g"
            @click="dropdownClick(g)"
          >
            {{ g }}
          </b-dropdown-item>
        </template>
      </b-dropdown>
      <br><br>

      <b-row>
        <template v-for="project in projects">
          <b-col
            v-if="dropdownText === 'All' || project.constraint == dropdownText"
            :key="project.name"
            md="4"
            sm="6"
          >
            <b-card
              :ref="project.name"
              class="mb-3 project"
              align="center"
              :img-src="project.image"
              img-top
              border-variant="default"
              @click="projectClick(project)"
            >
              <b-card-text class="project-text">
                {{ project.name }}
              </b-card-text>
            </b-card>
          </b-col>
        </template>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {},
  data () {
    return {
      dropdownText: 'All',
      dropdownGroup: ['All', 'Company', 'Personal'],
      projects: []
    }
  },
  mounted () {
    this.$axios.get(this.$store.state.DJANGO + '/api/v1/project')
      .then((response) => {
        this.projects = response.data['item']
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    dropdownClick (g) {
      this.dropdownText = g
    },
    projectClick (project) {
      this.$router.push(project.constraint + '/' + project.link)
    }
  }
}
</script>

<style scoped>
.project {
  border: 1px solid;
}
.project:hover {
  background: #4093d2;
}
.project-text {
  font-weight: bold;
  font-size: 20px;
}
</style>
