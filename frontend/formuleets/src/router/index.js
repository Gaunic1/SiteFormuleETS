import { createRouter, createWebHistory } from "vue-router";

import meta from "./meta";
import basicMeta from "./basicMeta";

import Cars from "../views/3DCars/3DCars.vue";
import Contact from "../views/Contact/Contact.vue";
import Donate from "../views/Donate/Donate.vue";
import EASTEREGG from "../views/Easter-EGG/EASTEREGG.vue";
import Error404 from "../views/Error404/Error404.vue";
import Home from "../views/Home/Home.vue";
import Project from "../views/Project/Project.vue";
import Sponsors from "../views/Sponsors/Sponsors.vue";
import Team from "../views/Team/Team.vue";
import Videos from "../views/Videos/Videos.vue";
import AlbumView from "../views/Photos/AlbumView.vue";
import PhotosView from "../views/Photos/PhotosView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    pageName: "Home",
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
    pageName: "Team",
  },
  {
    path: "/team/:year",
    name: "TeamYear",
    component: Team,
    props: true,
    pageName: "Team",
  },
  {
    path: "/sponsors",
    name: "Sponsors",
    component: Sponsors,
    pageName: "Sponsors",
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
    pageName: "Project",
  },
  {
    path: "/3d-model",
    name: "3DModel",
    component: Cars,
    pageName: "3D Model",
  },
  {
    path: "/donate",
    name: "Donate",
    component: Donate,
    pageName: "Donate",
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: Contact,
    pageName: "Contact US",
  },
  {
    path: "/media/videos",
    name: "Videos",
    component: Videos,
    pageName: "Videos",
  },
  {
    path: "/media/photos",
    name: "Albums",
    component: AlbumView,
    pageName: "Albums",
  },
  {
    path: "/photos/:id",
    name: "PhotosView",
    props: true,
    component: PhotosView,
    pageName: "Photos",
  },

  //EASTER EGG ;)
  {
    path: "/easter-eggs",
    name: "EASTEREGG",
    component: EASTEREGG,
    pageName: "EASTER EGGS",
  },

  //For 404 error, always need to be at the end
  {
    path: "/:pathMatch(.*)*",
    name: "Error404",
    component: Error404,
    pageName: "Not found",
  },
];

//setup meta
routes.forEach((e) => {
  const title = e.pageName + " — FormuleETS Montréal";

  e.meta = {};
  e.meta.title = title;
  e.meta.metaTags = basicMeta;
  e.meta.metaTags = e.meta.metaTags.concat([
    {
      name: "title",
      content: title,
    },
    {
      name: "description",
      content:
        e.path === "/"
          ? `Formule ETS is a team of engineering students from the École de technologie supérieure in Montreal. The team has been designing and building racing cars with the aim of participating in Formula SAE competitions for a little over 30 years now with the same goal: WIN !`
          : `Welcome to the ${e.pageName.toLowerCase()} page of the FormuleETS club.`,
    },
  ]);
});

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
});

export default router;
