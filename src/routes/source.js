module.exports = {
    path: '/Source',
    name: 'Source',
    component: () => import("@/LayOut.vue"),
    children: [
        {
            path: 'share',
            name: 'SourceHome',
            component: () => import('@/views/Source/Home.vue')
        }
    ]
}