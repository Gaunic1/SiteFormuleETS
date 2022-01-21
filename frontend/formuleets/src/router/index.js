import { createRouter, createWebHistory } from 'vue-router'

import meta from './meta'

import Cars from '../views/3DCars/3DCars.vue'
import Contact from '../views/Contact/Contact.vue'
import Donate from '../views/Donate/Donate.vue'
import EASTEREGG from '../views/Easter-EGG/EASTEREGG.vue'
import Error404 from '../views/Error404/Error404.vue'
import Home from '../views/Home/Home.vue'
import Project from '../views/Project/Project.vue'
import Sponsors from '../views/Sponsors/Sponsors.vue'
import Team from '../views/Team/Team.vue'
import Videos from '../views/Videos/Videos.vue'
import Photos from '../views/Photos/Photos.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "FormuleETS | Home"
    }
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
    meta: {
      title: "FormuleETS | Team"
    }
  },
  {
    path: "/sponsors",
    name: "Sponsors",
    component: Sponsors,
    meta: {
      title: "FormuleETS | Sponsors"
    }
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
    meta: {
      title: "FormuleETS | Project"
    }
  },
  {
    path: "/3d-model",
    name: "3DModel",
    component: Cars,
    meta: {
      title: "FormuleETS | 3D Model"
    }
  },
  {
    path: "/donate",
    name: "Donate",
    component: Donate,
    meta: {
      title: "FormuleETS | Donate"
    }
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: Contact,
    meta: {
      title: "FormuleETS | Contact US"
    }
  },
  {
    path: "/media/videos",
    name: "Videos",
    component: Videos,
    meta: {
      title: "FormuleETS | Videos"
    }
  },
  {
    path: "/media/photos",
    name: "Photos",
    component: Photos,
    meta: {
      title: "FormuleETS | Photos"
    }
  },

  //EASTER EGG ;)
  {
    path: "/easter-eggs",
    name: "EASTEREGG",
    component: EASTEREGG,
    meta: {
      title: "FormuleETS | EASTER EGGS"
    }
  },

  //For 404 error, always need to be at the end
  {
    path: "/:pathMatch(.*)*",
    name: "Error404",
    component: Error404,
    meta: {
      title: "FormuleETS | Not found"
    }
  }
]

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//go back to top when you change page
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);

  //setup SEO
  meta(to, from, next);
})

export default router
