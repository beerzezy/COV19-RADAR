module.exports = {
    path: '/Wiki',
    name: 'Wiki',
    component: () => import("@/LayOut.vue"),
    children: [
        {
            path: 'share',
            name: 'WikiHome',
            component: () => import('@/views/Wiki/Home.vue')
        }
    ]
}