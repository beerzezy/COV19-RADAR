module.exports = {
    path: '/Dashboard',
    name: 'Dashboard',
    component: () => import("@/LayOut.vue"),
    children: [
        {
            path: 'share',
            name: 'DashHome',
            component: () => import('@/views/Dashboard/Home.vue')
        }
    ]
}