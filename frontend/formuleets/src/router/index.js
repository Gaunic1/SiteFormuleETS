import { createRouter, createWebHistory } from 'vue-router'
import Cars from '../views/3DCars/3DCars.vue'
import Error404 from '../views/Error404/Error404.vue'
import Home from '../views/Home/Home.vue'
import Project from '../views/Project/Project.vue'
import Sponsors from '../views/Sponsors/Sponsors.vue'
import Team from '../views/Team/Team.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/team",
    name: "Team",
    component: Team
  },
  {
    path: "/sponsors",
    name: "Sponsors",
    component: Sponsors
  },
  {
    path: "/project",
    name: "Project",
    component: Project
  },
  {
    path: "/3d-model",
    name: "3DModel",
    component: Cars
  },

  //For 404 error, always need to be at the end
  {
    path: "/:pathMatch(.*)*",
    name: "Error404",
    component: Error404
  }
]

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//go back to top when you change page
router.beforeEach(() => {
  window.scrollTo(0, 0)
})

export default router
