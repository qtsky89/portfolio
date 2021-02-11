import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Main = () => import('@/views/Main')
const Document = () => import('@/views/document/Document')

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
            component: Document,
            props: { docName: 'gosas' }
          },
          {
            path: 'citrus',
            name: 'citrus',
            component: Document,
            props: { docName: 'citrus' }
          },
          {
            path: 'clous',
            name: 'clous',
            component: Document,
            props: { docName: 'clous' }
          },
          {
            path: 'devops',
            name: 'devops',
            component: Document,
            props: { docName: 'devops' }
          },
          {
            path: 'portfolio',
            name: 'portfolio',
            component: Document,
            props: { docName: 'portfolio' }
          },
         ]
        },
      ]
    }
  ]
}

