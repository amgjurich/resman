import { createRouter, createWebHistory } from 'vue-router';
import Prizes from '../views/Prizes.vue';
import About from '../views/About.vue';
import Jobs from '../views/jobs/Jobs.vue';
import PrizeDetails from '../views/PrizeDetails.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Prizes',
    component: Prizes,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: '/prize/:id',
    name: 'PrizeDetails',
    component: PrizeDetails,
    props: true,
  },
  //redirect
  {
    path: '/all-jobs',
    redirect: '/jobs',
  },
  //catch-all unknown route page
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

export default router;
