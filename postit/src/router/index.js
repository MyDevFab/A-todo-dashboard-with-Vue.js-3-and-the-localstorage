import { createRouter, createWebHistory } from 'vue-router'
//import NoteCardView from '../views/NoteCardView.vue'
import NoteCardDetail from '../views/NoteCardDetail.vue'
//import NoteHome from '../views/NoteHome.vue'
import NoteCardCreate from '../views/NoteCardCreate.vue'
import Main from '../views/Main.vue'

const routes = [

 /* {
    path: '/Notes',
    name: 'Notecard',
    component: NoteHome,
    props: true,
  },*/
  
    {
    path: '/Note/:id',
    name: 'NoteCardDetail',
    component: NoteCardDetail,
    props: true
    },

    {
      path: '/Note-create',
      name: 'NoteCardCreate',
      component: NoteCardCreate,
    
    },

    {
      path: '/',
      name: 'Main',
      component: Main,
      props: true,
    },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router