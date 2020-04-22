import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './routes/dashboard'

Vue.use(Router)

const routes = {
    mode: "history",
    routes: [
        Dashboard,
        { path: '*', redirect: '/Dashboard/share' }
    ]
}

export default new Router(routes)