module.exports = {
    path: '/Map',
    name: 'Map',
    component: () => import("@/LayOut.vue"),
    children: [
        {
            path: 'share',
            name: 'MapHome',
            component: () => import('@/views/Map/Home.vue')
        }
    ]
}