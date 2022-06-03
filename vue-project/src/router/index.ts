import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Employee from '../components/EmployeePage.vue'
import MainContent from '../components/MainContent.vue'
import LoginForm from '../components/LoginForm.vue'
import EmployeeDetail from "../components/EmployeeDetail.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '',
    name: 'home',
    component: HomeView,
    children: [
      { path: '', name: 'main', component: MainContent },
      {
        path: '/employee', name: 'employee', component: Employee,
      },
      {
        path: '/employee/:id', name: 'detail', component: EmployeeDetail
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path != '/login') {
    if (sessionStorage.getItem('CurAcc')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
