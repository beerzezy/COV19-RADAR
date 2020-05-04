import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './routes/dashboard'
import Map from './routes/map'
import Sources from './routes/sources'
import Health from './routes/health'
import About from './routes/about'
import Donate from './routes/donate'

Vue.use(Router)

const routes = {
    mode: "history",
    routes: [
        Dashboard,
        Map,
        Sources,
        Health,
        About,
        Donate,
        { path: '*', redirect: '/Dashboard/share' }
    ]
}

export default new Router(routes)