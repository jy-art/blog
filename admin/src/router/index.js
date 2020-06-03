import Vue from 'vue'
import VueRouter from 'vue-router'
import Mian from '../views/Main.vue'
import ArticlesEdit from '../views/ArtclesEdit.vue'
import ArticlesList from '../views/ArtclesList.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'
import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { isPublic: true }
  },
  {

    path: '/',
    name: 'Mian',
    component: Mian,
    children: [
      {
        path: '/categories/create',
        name: 'category-edit',
        component: CategoryEdit
      },
      {
        path: '/categories/edit/:id',
        component: CategoryEdit,
        props: true
      },
      {
        path: '/categories/list',
        name: 'category-list',
        component: CategoryList
      },
      {
        path: '/artcles/create',
        name: 'artcles-edit',
        component: ArticlesEdit
      },
      {
        path: '/artcles/edit/:id',
        component: ArticlesEdit,
        props: true
      },
      {
        path: '/artcles/list',
        name: 'artcles-list',
        component: ArticlesList
      },

      {
        path:'/admin_users/create',
        name:'admin_users-edit',
        component:AdminUserEdit
      },
      {
        path:'/admin_users/edit/:id',
        component:AdminUserEdit,
        props:true
      },
      {
        path:'/admin_users/list',
        name:'admin_users-list',
        component:AdminUserList
      },

    ]
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) => {
  if(!to.meta.isPublic && !localStorage.token){
    return next('/login')
  }
  next()
})

export default router
