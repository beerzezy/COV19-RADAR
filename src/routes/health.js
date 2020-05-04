module.exports = {
    path: '/Health',
    name: 'Health',
    component: () => import("@/LayOut.vue"),
    children: [
        {
            path: 'share',
            name: 'HealthHome',
            component: () => import('@/views/Health/Home.vue')
        }
    ]
}