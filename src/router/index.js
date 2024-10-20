import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactsView from '../views/ContactsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeVue',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projectsVue',
      component: ProjectsView
    },
    {
      path: '/contacts',
      name: 'contactsVue',
      component: ContactsView
    },
    // exemplo de como chamar a rota de uma forma diferente, usando lambda
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
  ]
})

export default router
