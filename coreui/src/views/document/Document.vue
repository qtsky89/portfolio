<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card>
          <vue-markdown
            class="vue-marked-custom"
            :source="markdownData"
          />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import Prism from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-diff'

export default {
  components: {
    VueMarkdown
  },
  props: {
    docName: {
      type: String,
      default: '',
      required: true
    }
  },
  data () {
    return {
      markdownData: 'test'
    }
  },
  mounted () {
    this.getDocument()
  },
  methods: {
    getDocument () {
      /*
      return this.$http.get(this.$store.state.DJANGO + '/api/v1/document/' + this.docName)
        .then((response) => {
          this.markdownData = response.data
          this.$nextTick(function () {
            Prism.highlightAll()
          })
        })
        .catch((error) => {
          console.log(error)
        })*/
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../node_modules/prismjs/themes/prism-tomorrow.css'
</style>
<style>
.vue-marked-custom img {
  max-width: 100%;
  border: 1px solid lightgray;
}
</style>
