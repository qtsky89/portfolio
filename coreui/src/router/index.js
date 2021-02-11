import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Main = () => import('@/views/Main')
const Doc = () => import('@/views/document/Document')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/main',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'main',
          name: 'Main',
          component: Main
        },
        {
          path: 'document',
          redirect: '/document/gosas',
          name: 'Document',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
          {
            path: 'gosas',
            name: 'gosas',
            component: Doc,
            props: { docName: 'gosas' }
          },
          {
            path: 'citrus',
            name: 'citrus',
            component: Doc,
            props: { docName: 'citrus' }
          },
          {
            path: 'clous',
            name: 'clous',
            component: Doc,
            props: { docName: 'clous' }
          },
          {
            path: 'devops',
            name: 'devops',
            component: Doc,
            props: { docName: 'devops' }
          },
          {
            path: 'portfolio',
            name: 'portfolio',
            component: Doc,
            props: { docName: 'portfolio' }
          },
         ]
        },
      ]
    }
  ]
}

