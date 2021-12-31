import { createRouter, createWebHistory } from 'vue-router'
import Error404 from '../views/Error404/Error404.vue'
import Home from '../views/Home/Home.vue'
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

  //For 404 error, always need to be at the end
  {
    path: "/:pathMatch(.*)*",
    name: "Error404",
    component: Error404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
