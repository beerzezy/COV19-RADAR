module.exports = {
    path: '/Sources',
    name: 'Sources',
    component: () => import("@/LayOut.vue"),
    children: [
        {
            path: 'share',
            name: 'SourcesHome',
            component: () => import('@/views/Sources/Home.vue')
        }
    ]
}