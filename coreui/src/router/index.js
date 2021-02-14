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
      redirect: "/Main",
      name: "Home",
      component: TheContainer,
      children: [
        {
          path: "Main",
          name: "Main",
          component: Main,
        },
        {
          path: "Company",
          redirect: "/Company/Golang Search Library",
          name: "Company",
          component: {
            render(c) {
              return c("router-view");
            },
          },
          children: [
            {
              path: "Golang Search Library",
              name: "Golang Search Library",
              component: Project,
              props: { name: "Golang Search Library" },
            },
            {
              path: "CI CD Builder",
              name: "CI CD Builder",
              component: Project,
              props: { name: "CI CD Builder" },
            },
            {
              path: "Cloud Search",
              name: "Cloud Search",
              component: Project,
              props: { name: "Cloud Search" },
            },
            {
              path: "Search DevOps",
              name: "Search DevOps",
              component: Project,
              props: { name: "Search DevOps" },
            },
          ],
        },
        {
          path: "Personal",
          redirect: "/Personal/Portfolio",
          name: "Personal",
          component: {
            render(c) {
              return c("router-view");
            },
          },
          children: [
            {
              path: "Portfolio",
              name: "Portfolio",
              component: Project,
              props: { name: "Portfolio" },
            },
          ],
        },
      ],
    },
  ];
}
