import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UpdateToday from '../views/subMerchants/updateToday'
Vue.use(VueRouter)


export default new VueRouter({
  routes : [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[{
        path:'/updateToday',
        name:'updateToday',
        component:UpdateToday
      }]
    }


  ]
})
