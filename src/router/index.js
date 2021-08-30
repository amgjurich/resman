import { createRouter, createWebHistory } from 'vue-router';
import Prizes from '../views/Prizes.vue';

import PrizeDetails from '../views/PrizeDetails.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Prizes',
    component: Prizes,
  },

  {
    path: '/prize/:id',
    name: 'PrizeDetails',
    component: PrizeDetails,
    props: true,
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

export default router;
