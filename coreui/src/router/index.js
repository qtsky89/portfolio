import Vue from "vue";
import Router from "vue-router";

// Containers
const TheContainer = () => import("@/containers/TheContainer");

// Views
const Main = () => import("@/views/Main");
const Project = () => import("@/views/project/Project");

Vue.use(Router);

export default new Router({
  mode: "history",
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes(),
});

function configRoutes() {
  return [
    {
      path: "/",
      redirect: "/main",
      name: "Home",
      component: TheContainer,
      children: [
        {
          path: "main",
          name: "Main",
          component: Main,
        },
        {
          path: "company",
          redirect: "/company/gosas",
          name: "Company",
          component: {
            render(c) {
              return c("router-view");
            },
          },
          children: [
            {
              path: "gosas",
              name: "gosas",
              component: Project,
              props: { docName: "gosas" },
            },
            {
              path: "citrus",
              name: "citrus",
              component: Project,
              props: { docName: "citrus" },
            },
            {
              path: "clous",
              name: "clous",
              component: Project,
              props: { docName: "clous" },
            },
            {
              path: "devops",
              name: "devops",
              component: Project,
              props: { docName: "devops" },
            },
          ],
        },
        {
          path: "personal",
          redirect: "/personal/portfolio",
          name: "Personal",
          component: {
            render(c) {
              return c("router-view");
            },
          },
          children: [
            {
              path: "portfolio",
              name: "portfolio",
              component: Project,
              props: { docName: "portfolio" },
            },
          ],
        },
      ],
    },
  ];
}
