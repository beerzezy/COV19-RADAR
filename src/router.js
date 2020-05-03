import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './routes/dashboard'
import Map from './routes/map'
import Source from './routes/source'
import Wiki from './routes/wiki'
import About from './routes/about'

Vue.use(Router)

const routes = {
    mode: "history",
    routes: [
        Dashboard,
        Map,
        Source,
        Wiki,
        About,
        { path: '*', redirect: '/Dashboard/share' }
    ]
}

export default new Router(routes)