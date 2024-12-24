import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Ensure file paths are correct
import Calculator from '../views/Calculator.vue'; // Ensure this file exists

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/calculator', name: 'Calculator', component: Calculator },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
