import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Main = () => import('@/views/Main')
const Doc = () => import('@/views/doc/Doc')

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: '',
          name: 'Main',
          component: Main
        },
        {
          path: 'company',
          redirect: '/company/gosas',
          name: 'Company',
          component: {
            render (c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: 'gosas',
              name: 'Golang Search Library',
              component: Doc,
              props: { docName: 'gosas' }
            },
            {
              path: 'citrus',
              name: 'CI CD Builder',
              component: Doc,
              props: { docName: 'citrus' }
            },
            {
              path: 'clous',
              name: 'Cloud Search',
              component: Doc,
              props: { docName: 'clous' }
            },
            {
              path: 'devops',
              name: 'Search DevOps',
              component: Doc,
              props: { docName: 'devops' }
            }
          ]
        },
        {
          path: 'personal',
          redirect: '/personal/portfolio',
          name: 'Personal',
          component: {
            render (c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: 'portfolio',
              name: 'Portfolio',
              component: Doc,
              props: { docName: 'portfolio' }
            }
          ]
        }
      ]
    }
  ]
}
